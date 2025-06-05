const ChatService = require('../services/chat.service');
const { validationResult } = require('express-validator');

class ChatController {
    async createChat(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const userId = req.user.id;
            const { participantIds, type, eventId, name } = req.body;

            const chat = await ChatService.createChat(userId, participantIds, type, eventId, name);

            res.status(201).json({
                success: true,
                data: chat
            });
        } catch (error) {
            console.error('Erreur lors de la création du chat:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création du chat',
                error: error.message
            });
        }
    }

    async sendMessage(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const userId = req.user.id;
            const { chatId } = req.params;
            const { content, attachments } = req.body;

            const message = await ChatService.sendMessage(chatId, userId, content, attachments);

            res.status(200).json({
                success: true,
                data: message
            });
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de l\'envoi du message',
                error: error.message
            });
        }
    }

    async getChats(req, res) {
        try {
            const userId = req.user.id;
            const chats = await ChatService.getChats(userId);

            res.status(200).json({
                success: true,
                data: chats
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des chats:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des chats',
                error: error.message
            });
        }
    }

    async getChatMessages(req, res) {
        try {
            const userId = req.user.id;
            const { chatId } = req.params;
            const { page, limit } = req.query;

            const messages = await ChatService.getChatMessages(
                chatId,
                userId,
                parseInt(page) || 1,
                parseInt(limit) || 50
            );

            res.status(200).json({
                success: true,
                data: messages
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des messages:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des messages',
                error: error.message
            });
        }
    }

    async addParticipants(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const userId = req.user.id;
            const { chatId } = req.params;
            const { participantIds } = req.body;

            const updatedChat = await ChatService.addParticipants(chatId, userId, participantIds);

            res.status(200).json({
                success: true,
                data: updatedChat
            });
        } catch (error) {
            console.error('Erreur lors de l\'ajout des participants:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de l\'ajout des participants',
                error: error.message
            });
        }
    }

    async removeParticipant(req, res) {
        try {
            const userId = req.user.id;
            const { chatId, participantId } = req.params;

            const updatedChat = await ChatService.removeParticipant(chatId, userId, participantId);

            res.status(200).json({
                success: true,
                data: updatedChat
            });
        } catch (error) {
            console.error('Erreur lors de la suppression du participant:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression du participant',
                error: error.message
            });
        }
    }

    async updateChatSettings(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const userId = req.user.id;
            const { chatId } = req.params;
            const settings = req.body;

            const updatedChat = await ChatService.updateChatSettings(chatId, userId, settings);

            res.status(200).json({
                success: true,
                data: updatedChat
            });
        } catch (error) {
            console.error('Erreur lors de la mise à jour des paramètres:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour des paramètres',
                error: error.message
            });
        }
    }

    async searchMessages(req, res) {
        try {
            const userId = req.user.id;
            const { chatId } = req.params;
            const { query } = req.query;

            const messages = await ChatService.searchMessages(chatId, userId, query);

            res.status(200).json({
                success: true,
                data: messages
            });
        } catch (error) {
            console.error('Erreur lors de la recherche des messages:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la recherche des messages',
                error: error.message
            });
        }
    }
}

module.exports = new ChatController(); 