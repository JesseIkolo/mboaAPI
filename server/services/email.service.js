// --- services/email.service.js ---
const nodemailer = require('nodemailer');

class EmailService {
    static async sendEmailValidation(email, template) {
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });
            
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
                    from: `"Mboa Events" <${process.env.SMTP_USER}>`,
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
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });

            const minutes = Math.ceil(lockDuration / (60 * 1000));
            
            await transporter.sendMail({
                from: `"Sécurité Mboa Events" <${process.env.SMTP_USER}>`,
                to: user.email,
                subject: "Alerte de Sécurité - Compte Temporairement Bloqué",
                html: `
                    <h2>Alerte de Sécurité - Compte Bloqué</h2>
                    <p>Cher(e) ${user.firstName} ${user.lastName},</p>
                    <p>Nous avons détecté plusieurs tentatives de connexion échouées sur votre compte administrateur.</p>
                    <p>Par mesure de sécurité, votre compte a été temporairement bloqué pour ${minutes} minutes.</p>
                    <p>Détails :</p>
                    <ul>
                        <li>Nombre de tentatives échouées : ${attempts}</li>
                        <li>Date et heure : ${new Date().toLocaleString()}</li>
                        <li>Durée du blocage : ${minutes} minutes</li>
                    </ul>
                    <p>Si vous n'êtes pas à l'origine de ces tentatives, nous vous recommandons de :</p>
                    <ol>
                        <li>Changer votre mot de passe dès que possible</li>
                        <li>Activer l'authentification à deux facteurs si ce n'est pas déjà fait</li>
                        <li>Contacter l'équipe de support si vous avez besoin d'aide</li>
                    </ol>
                    <p>Pour des raisons de sécurité, vous devrez attendre la fin de la période de blocage pour vous reconnecter.</p>
                    <p>Si vous pensez qu'il s'agit d'une erreur, contactez un super administrateur.</p>
                `
            });

            return true;
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email:", error);
            return false;
        }
    }
}

module.exports = EmailService;