const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    attachments: [{
        type: {
            type: String,
            enum: ['image', 'document', 'audio', 'video']
        },
        url: String,
        name: String,
        size: Number
    }],
    readBy: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        readAt: {
            type: Date,
            default: Date.now
        }
    }],
    status: {
        type: String,
        enum: ['sent', 'delivered', 'read'],
        default: 'sent'
    }
}, {
    timestamps: true
});

const chatSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    type: {
        type: String,
        enum: ['direct', 'group'],
        default: 'direct'
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    name: String, // Pour les chats de groupe
    messages: [messageSchema],
    lastMessage: {
        content: String,
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        timestamp: Date
    },
    metadata: {
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        admins: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        isArchived: {
            type: Boolean,
            default: false
        },
        archivedAt: Date,
        archivedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    settings: {
        notifications: {
            type: Boolean,
            default: true
        },
        muted: {
            type: Boolean,
            default: false
        },
        mutedUntil: Date
    }
}, {
    timestamps: true
});

// Indexes pour améliorer les performances
chatSchema.index({ participants: 1 });
chatSchema.index({ event: 1 });
chatSchema.index({ 'messages.sender': 1 });
chatSchema.index({ 'messages.timestamp': -1 });

// Méthode pour ajouter un message
chatSchema.methods.addMessage = async function(senderId, content, attachments = []) {
    const message = {
        sender: senderId,
        content,
        attachments,
        readBy: [{ user: senderId }],
        status: 'sent'
    };

    this.messages.push(message);
    this.lastMessage = {
        content,
        sender: senderId,
        timestamp: new Date()
    };

    await this.save();
    return message;
};

// Méthode pour marquer les messages comme lus
chatSchema.methods.markAsRead = async function(userId) {
    const unreadMessages = this.messages.filter(msg => 
        !msg.readBy.some(read => read.user.toString() === userId.toString())
    );

    unreadMessages.forEach(msg => {
        msg.readBy.push({
            user: userId,
            readAt: new Date()
        });
        msg.status = 'read';
    });

    await this.save();
    return unreadMessages.length;
};

// Méthode pour archiver le chat
chatSchema.methods.archive = async function(userId) {
    this.metadata.isArchived = true;
    this.metadata.archivedAt = new Date();
    this.metadata.archivedBy = userId;
    await this.save();
};

// Méthode pour désarchiver le chat
chatSchema.methods.unarchive = async function() {
    this.metadata.isArchived = false;
    this.metadata.archivedAt = null;
    this.metadata.archivedBy = null;
    await this.save();
};

module.exports = mongoose.model('Chat', chatSchema); 