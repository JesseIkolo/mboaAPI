// --- services/email.service.js ---
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuration du transporteur SMTP principal
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });
};

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
    }

    static createTransporter() {
        return nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }

    static async sendEmailValidation(email, template) {
        try {
            const transporter = createTransporter();
            
            let subject, html;
            
            if (template === 'waitlist-confirmation') {
                subject = "Bienvenue sur la liste d'attente Mboa Events !";
                html = `
                    <h2>Merci de votre intérêt pour Mboa Events !</h2>
                    <p>Nous sommes ravis de vous confirmer votre inscription sur notre liste d'attente.</p>
                    <p>Vous serez parmi les premiers à être informés du lancement de notre plateforme et à bénéficier d'avantages exclusifs.</p>
                    <p>Nous vous contacterons dès que nous serons prêts à vous accueillir !</p>
                    <p>L'équipe Mboa Events</p>
                `;
            }

            if (email) {
                await transporter.sendMail({
                    from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
                    to: email,
                    subject,
                    html
                });
            }

            return true;
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email:", error);
            return false;
        }
    }

    static async sendAccountLockedEmail(user, lockDuration, attempts) {
        try {
            const minutes = Math.floor(lockDuration / (60 * 1000));
            const emailOptions = {
                from: process.env.SMTP_USER,
                to: user.email,
                subject: 'Compte temporairement bloqué - MBOA Events',
                html: `
                    <h2>Compte temporairement bloqué</h2>
                    <p>Bonjour ${user.firstName} ${user.lastName},</p>
                    <p>Pour des raisons de sécurité, votre compte a été temporairement bloqué suite à ${attempts} tentatives de connexion échouées.</p>
                    <p>Votre compte sera automatiquement débloqué dans ${minutes} minutes.</p>
                    <p>Si vous n'êtes pas à l'origine de ces tentatives, nous vous recommandons de changer votre mot de passe dès que possible.</p>
                    <p>Cordialement,<br>L'équipe MBOA Events</p>
                `
            };
            const transporter = EmailService.createTransporter();
            const info = await transporter.sendMail(emailOptions);
            console.log('Email de compte bloqué envoyé:', info.messageId);
            return true;
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            return false;
        }
    }

    /**
     * Envoie un code OTP par email
     * @param {string} email - Adresse email du destinataire
     * @param {string} otp - Code OTP à envoyer
     * @returns {Promise<boolean>} Succès de l'envoi
     */
    async sendOTPByEmail(email, otp) {
        try {
            const mailOptions = {
                from: process.env.SMTP_FROM,
                to: email,
                subject: 'Code de vérification MBOA Events',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #333;">Vérification de votre compte MBOA Events</h2>
                        <p>Voici votre code de vérification :</p>
                        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 24px; letter-spacing: 5px; margin: 20px 0;">
                            <strong>${otp}</strong>
                        </div>
                        <p>Ce code est valable pendant 5 minutes.</p>
                        <p>Si vous n'avez pas demandé ce code, veuillez ignorer cet email.</p>
                        <p style="color: #666; font-size: 12px; margin-top: 30px;">
                            Ceci est un email automatique, merci de ne pas y répondre.
                        </p>
                    </div>
                `
            };

            await this.transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            return false;
        }
    }
}

// Fonction pour envoyer l'OTP par email
const sendOTPByEmail = async (email, otp) => {
    try {
        const transporter = createTransporter();
        
        const mailOptions = {
            from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
            to: email,
            subject: 'Code de vérification MBOA Events',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Vérification de votre compte MBOA Events</h2>
                    <p>Bonjour,</p>
                    <p>Voici votre code de vérification pour MBOA Events :</p>
                    <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 24px; letter-spacing: 5px; margin: 20px 0;">
                        <strong>${otp}</strong>
                    </div>
                    <p>Ce code est valable pendant 10 minutes.</p>
                    <p>Si vous n'avez pas demandé ce code, veuillez ignorer cet email.</p>
                    <p style="color: #666; font-size: 12px; margin-top: 30px;">
                        Ceci est un email automatique, merci de ne pas y répondre.
                    </p>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email envoyé: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        throw new Error('Erreur lors de l\'envoi de l\'email');
    }
};

// Fonction pour envoyer un email de validation
const sendEmailValidation = async (email, token) => {
    try {
        const transporter = createTransporter();
        const validationLink = `${process.env.CLIENT_URL || 'http://localhost:3000'}/verify-email?token=${token}`;
        
        const mailOptions = {
            from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
            to: email,
            subject: 'Validation de votre email - MBOA Events',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Validation de votre email</h2>
                    <p>Bonjour,</p>
                    <p>Merci de vous être inscrit sur MBOA Events. Pour finaliser votre inscription, veuillez cliquer sur le lien ci-dessous :</p>
                    <div style="margin: 20px 0;">
                        <a href="${validationLink}" 
                           style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">
                            Valider mon email
                        </a>
                    </div>
                    <p>Si le bouton ne fonctionne pas, vous pouvez copier et coller ce lien dans votre navigateur :</p>
                    <p>${validationLink}</p>
                    <p>Ce lien est valable pendant 24 heures.</p>
                    <p style="color: #666; font-size: 12px; margin-top: 30px;">
                        Ceci est un email automatique, merci de ne pas y répondre.
                    </p>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email de validation envoyé: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email de validation:', error);
        throw new Error('Erreur lors de l\'envoi de l\'email de validation');
    }
};

// Fonction pour envoyer un email de bienvenue
const sendWelcomeEmail = async (email, name) => {
    try {
        const transporter = createTransporter();
        
        const mailOptions = {
            from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
            to: email,
            subject: 'Bienvenue sur MBOA Events !',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Bienvenue sur MBOA Events !</h2>
                    <p>Bonjour ${name},</p>
                    <p>Nous sommes ravis de vous accueillir sur MBOA Events !</p>
                    <p>Votre compte a été créé avec succès. Vous pouvez maintenant :</p>
                    <ul>
                        <li>Découvrir les événements à venir</li>
                        <li>Créer et gérer vos propres événements</li>
                        <li>Interagir avec d'autres membres de la communauté</li>
                    </ul>
                    <p>N'hésitez pas à explorer toutes les fonctionnalités de notre plateforme.</p>
                    <p>À très bientôt sur MBOA Events !</p>
                    <p>L'équipe MBOA Events</p>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email de bienvenue envoyé: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email de bienvenue:', error);
        throw new Error('Erreur lors de l\'envoi de l\'email de bienvenue');
    }
};

// Fonction de test pour vérifier la configuration email
const testEmailConfiguration = async (testEmail) => {
    try {
        const transporter = createTransporter();
        
        const mailOptions = {
            from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
            to: testEmail,
            subject: 'Test de Configuration Email MBOA Events',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Test de Configuration Email</h2>
                    <p>Bonjour,</p>
                    <p>Ceci est un email de test pour vérifier la configuration SMTP de MBOA Events.</p>
                    <p>Si vous recevez cet email, cela signifie que la configuration est correcte.</p>
                    <p>Date et heure du test : ${new Date().toLocaleString()}</p>
                    <hr>
                    <p style="color: #666; font-size: 12px;">
                        Ceci est un email de test automatique, merci de ne pas y répondre.
                    </p>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email de test envoyé avec succès !');
        console.log('ID du message:', info.messageId);
        return {
            success: true,
            messageId: info.messageId
        };
    } catch (error) {
        console.error('Erreur lors du test de configuration email:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

module.exports = {
    sendOTPByEmail,
    sendEmailValidation,
    sendWelcomeEmail,
    createTransporter
};