// --- services/otp.service.js ---

const crypto = require('crypto');
const User = require('../models/user.model');
const EmailService = require('./email.service');

class OTPService {
    /**
     * Génère un code OTP à 6 chiffres
     * @returns {string} Code OTP
     */
    static generateOTP() {
        return crypto.randomInt(100000, 999999).toString();
    }

    /**
     * Crée et envoie un nouveau code OTP
     * @param {string} email - Email de l'utilisateur
     * @returns {Promise<boolean>} Succès de l'opération
     */
    static async createAndSendOTP(email) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('Utilisateur non trouvé');
            }

            // Vérifier si un OTP récent existe déjà
            if (user.otpData && user.otpData.expiresAt > Date.now()) {
                const timeLeft = Math.ceil((user.otpData.expiresAt - Date.now()) / 1000);
                throw new Error(`Veuillez attendre ${timeLeft} secondes avant de demander un nouveau code`);
            }

            // Générer un nouveau code OTP
            const otp = this.generateOTP();
            const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

            // Stocker l'OTP dans la base de données
            user.otpData = {
                code: otp,
                expiresAt,
                attempts: 0
            };
            await user.save();

            // Envoyer l'OTP par email
            await EmailService.sendOTPByEmail(email, otp);

            return true;
        } catch (error) {
            console.error('Erreur lors de la création/envoi OTP:', error);
            throw error;
        }
    }

    /**
     * Vérifie un code OTP
     * @param {string} email - Email de l'utilisateur
     * @param {string} otp - Code OTP à vérifier
     * @returns {Promise<boolean>} Succès de la vérification
     */
    static async verifyOTP(email, otp) {
        try {
            const user = await User.findOne({ email });
            if (!user || !user.otpData) {
                throw new Error('Code OTP non trouvé ou expiré');
            }

            // Vérifier si l'OTP est expiré
            if (user.otpData.expiresAt < Date.now()) {
                user.otpData = undefined;
                await user.save();
                throw new Error('Code OTP expiré');
            }

            // Vérifier le nombre de tentatives
            if (user.otpData.attempts >= 5) {
                throw new Error('Trop de tentatives. Veuillez demander un nouveau code');
            }

            // Incrémenter le compteur de tentatives
            user.otpData.attempts += 1;
            await user.save();

            // Vérifier le code
            if (user.otpData.code !== otp) {
                throw new Error('Code OTP invalide');
            }

            // OTP valide : marquer l'email comme vérifié et supprimer l'OTP
            user.isEmailVerified = true;
            user.otpData = undefined;
            await user.save();

            return true;
        } catch (error) {
            console.error('Erreur lors de la vérification OTP:', error);
            throw error;
        }
    }

    /**
     * Renvoie un nouveau code OTP
     * @param {string} email - Email de l'utilisateur
     * @returns {Promise<boolean>} Succès de l'opération
     */
    static async resendOTP(email) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('Utilisateur non trouvé');
            }

            // Vérifier le délai entre les renvois
            if (user.otpData && user.otpData.expiresAt > Date.now()) {
                const timeLeft = Math.ceil((user.otpData.expiresAt - Date.now()) / 1000);
                throw new Error(`Veuillez attendre ${timeLeft} secondes avant de demander un nouveau code`);
            }

            return await this.createAndSendOTP(email);
        } catch (error) {
            console.error('Erreur lors du renvoi OTP:', error);
            throw error;
        }
    }
}

module.exports = OTPService;
