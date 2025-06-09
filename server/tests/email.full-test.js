const { 
    sendOTPByEmail, 
    sendEmailValidation, 
    sendWelcomeEmail,
    EmailService 
} = require('../services/email.service');
require('dotenv').config();

// Fonction pour attendre un certain temps
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fonction pour tester tous les types d'emails
async function runFullEmailTest() {
    const testEmail = process.env.SMTP_USER;
    console.log('🚀 Démarrage des tests email complets...\n');
    console.log('Configuration utilisée :');
    console.log('- Host:', process.env.SMTP_HOST);
    console.log('- Port:', process.env.SMTP_PORT);
    console.log('- User:', process.env.SMTP_USER);
    console.log('- Secure:', process.env.SMTP_SECURE);
    console.log('- TLS: activé avec vérification désactivée\n');

    try {
        // Test 1: Email OTP
        console.log('📧 Test 1: Envoi d\'un code OTP...');
        const otpResult = await sendOTPByEmail(testEmail, '123456');
        console.log('✅ Email OTP envoyé avec succès !');
        console.log('ID du message:', otpResult.messageId, '\n');

        // Attendre 5 secondes avant le prochain envoi
        console.log('⏳ Attente de 5 secondes...');
        await wait(5000);

        // Test 2: Email de validation
        console.log('📧 Test 2: Envoi d\'un email de validation...');
        const validationResult = await sendEmailValidation(testEmail, 'test-token-123');
        console.log('✅ Email de validation envoyé avec succès !');
        console.log('ID du message:', validationResult.messageId, '\n');

        // Attendre 5 secondes avant le prochain envoi
        console.log('⏳ Attente de 5 secondes...');
        await wait(5000);

        // Test 3: Email de bienvenue
        console.log('📧 Test 3: Envoi d\'un email de bienvenue...');
        const welcomeResult = await sendWelcomeEmail(testEmail, 'Utilisateur Test');
        console.log('✅ Email de bienvenue envoyé avec succès !');
        console.log('ID du message:', welcomeResult.messageId, '\n');

        // Attendre 5 secondes avant le prochain envoi
        console.log('⏳ Attente de 5 secondes...');
        await wait(5000);

        // Test 4: Email de confirmation liste d'attente
        console.log('📧 Test 4: Envoi d\'un email de confirmation liste d\'attente...');
        const waitlistResult = await EmailService.sendEmailValidation(testEmail, 'waitlist-confirmation');
        if (waitlistResult) {
            console.log('✅ Email de confirmation liste d\'attente envoyé avec succès !\n');
        }

        // Attendre 5 secondes avant le prochain envoi
        console.log('⏳ Attente de 5 secondes...');
        await wait(5000);

        // Test 5: Email de compte bloqué
        console.log('📧 Test 5: Envoi d\'un email de compte bloqué...');
        const user = {
            email: testEmail,
            firstName: 'Test',
            lastName: 'Utilisateur'
        };
        const lockDuration = 15 * 60 * 1000; // 15 minutes
        const attempts = 5;
        const lockedResult = await EmailService.sendAccountLockedEmail(user, lockDuration, attempts);
        if (lockedResult) {
            console.log('✅ Email de compte bloqué envoyé avec succès !\n');
        }

        console.log('🎉 Tous les tests ont réussi !');
        console.log('📬 Veuillez vérifier votre boîte de réception :', testEmail);

    } catch (error) {
        console.error('\n❌ Erreur lors des tests :');
        console.error('Message:', error.message);
        if (error.code) console.error('Code:', error.code);
        if (error.response) console.error('Réponse du serveur:', error.response);
        if (error.command) console.error('Commande:', error.command);
    }
}

// Exécuter les tests
runFullEmailTest(); 