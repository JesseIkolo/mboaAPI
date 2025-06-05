const Chat = require('../models/chat.model');
const User = require('../models/user.model');
const Event = require('../models/event.model');
const mongoose = require('mongoose');

class ChatService {
    async createChat(userId, participantIds, type = 'direct', eventId = null, name = null) {
        try {
            // Vérifier si un chat direct existe déjà entre ces utilisateurs
            if (type === 'direct' && participantIds.length === 1) {
                const existingChat = await Chat.findOne({
                    type: 'direct',
                    participants: {
                        $all: [userId, ...participantIds],
                        $size: 2
                    }
                });

                if (existingChat) {
                    return existingChat;
                }
            }

            // Créer un nouveau chat
            const chat = new Chat({
                participants: [userId, ...participantIds],
                type,
                event: eventId,
                name,
                metadata: {
                    createdBy: userId,
                    admins: [userId]
                }
            });

            await chat.save();
            return chat;
        } catch (error) {
            console.error('Erreur lors de la création du chat:', error);
            throw error;
        }
    }

    async sendMessage(chatId, senderId, content, attachments = []) {
        try {
            const chat = await Chat.findById(chatId);
            if (!chat) {
                throw new Error('Chat non trouvé');
            }

            if (!chat.participants.includes(senderId)) {
                throw new Error('Utilisateur non autorisé à envoyer des messages dans ce chat');
            }

            const message = await chat.addMessage(senderId, content, attachments);
            
            // Notifier les autres participants
            await this.notifyParticipants(chat, senderId, message);

            return message;
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            throw error;
        }
    }

    async getChats(userId) {
        try {
            return await Chat.find({
                participants: userId,
                'metadata.isArchived': false
            })
            .populate('participants', 'name avatar')
            .populate('lastMessage.sender', 'name')
            .sort('-lastMessage.timestamp');
        } catch (error) {
            console.error('Erreur lors de la récupération des chats:', error);
            throw error;
        }
    }

    async getChatMessages(chatId, userId, page = 1, limit = 50) {
        try {
            const chat = await Chat.findOne({
                _id: chatId,
                participants: userId
            });

            if (!chat) {
                throw new Error('Chat non trouvé ou accès non autorisé');
            }

            const skip = (page - 1) * limit;
            const messages = chat.messages
                .slice(Math.max(0, chat.messages.length - skip - limit), chat.messages.length - skip)
                .reverse();

            // Marquer les messages comme lus
            await chat.markAsRead(userId);

            return {
                messages,
                hasMore: chat.messages.length > skip + limit,
                totalMessages: chat.messages.length
            };
        } catch (error) {
            console.error('Erreur lors de la récupération des messages:', error);
            throw error;
        }
    }

    async addParticipants(chatId, userId, newParticipantIds) {
        try {
            const chat = await Chat.findById(chatId);
            if (!chat) {
                throw new Error('Chat non trouvé');
            }

            if (!chat.metadata.admins.includes(userId)) {
                throw new Error('Permission non accordée');
            }

            // Ajouter les nouveaux participants
            chat.participants.push(...newParticipantIds);
            chat.participants = [...new Set(chat.participants)]; // Supprimer les doublons

            await chat.save();
            return chat;
        } catch (error) {
            console.error('Erreur lors de l\'ajout des participants:', error);
            throw error;
        }
    }

    async removeParticipant(chatId, userId, participantId) {
        try {
            const chat = await Chat.findById(chatId);
            if (!chat) {
                throw new Error('Chat non trouvé');
            }

            if (!chat.metadata.admins.includes(userId) && userId !== participantId) {
                throw new Error('Permission non accordée');
            }

            chat.participants = chat.participants.filter(
                p => p.toString() !== participantId.toString()
            );

            if (chat.metadata.admins.includes(participantId)) {
                chat.metadata.admins = chat.metadata.admins.filter(
                    a => a.toString() !== participantId.toString()
                );
            }

            await chat.save();
            return chat;
        } catch (error) {
            console.error('Erreur lors de la suppression du participant:', error);
            throw error;
        }
    }

    async updateChatSettings(chatId, userId, settings) {
        try {
            const chat = await Chat.findOne({
                _id: chatId,
                participants: userId
            });

            if (!chat) {
                throw new Error('Chat non trouvé ou accès non autorisé');
            }

            Object.assign(chat.settings, settings);
            await chat.save();
            return chat;
        } catch (error) {
            console.error('Erreur lors de la mise à jour des paramètres:', error);
            throw error;
        }
    }

    async searchMessages(chatId, userId, query) {
        try {
            const chat = await Chat.findOne({
                _id: chatId,
                participants: userId
            });

            if (!chat) {
                throw new Error('Chat non trouvé ou accès non autorisé');
            }

            const messages = chat.messages.filter(msg =>
                msg.content.toLowerCase().includes(query.toLowerCase())
            );

            return messages;
        } catch (error) {
            console.error('Erreur lors de la recherche des messages:', error);
            throw error;
        }
    }

    async notifyParticipants(chat, senderId, message) {
        try {
            const recipients = chat.participants.filter(
                p => p.toString() !== senderId.toString() &&
                !chat.settings.muted &&
                (!chat.settings.mutedUntil || chat.settings.mutedUntil < new Date())
            );

            // Ici, vous pouvez implémenter la logique de notification
            // Par exemple, envoyer des notifications push, des emails, etc.
            
            // Mettre à jour le statut du message
            message.status = 'delivered';
            await chat.save();
        } catch (error) {
            console.error('Erreur lors de la notification des participants:', error);
            // Ne pas propager l'erreur pour ne pas bloquer l'envoi du message
        }
    }
}

module.exports = new ChatService(); 