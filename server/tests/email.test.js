const { testEmailConfiguration } = require('../services/email.service');
require('dotenv').config();

// Fonction principale de test
async function runEmailTest() {
    console.log('Démarrage du test de configuration email...');
    console.log('Configuration utilisée :');
    console.log('- Host:', process.env.SMTP_HOST);
    console.log('- Port:', process.env.SMTP_PORT);
    console.log('- User:', process.env.SMTP_USER);
    console.log('- Secure:', process.env.SMTP_SECURE);
    console.log('- TLS: activé avec vérification désactivée');
    
    // Remplacez cette adresse par l'adresse email où vous souhaitez recevoir le test
    const testEmail = process.env.SMTP_USER;
    
    try {
        const result = await testEmailConfiguration(testEmail);
        
        if (result.success) {
            console.log('\n✅ Test réussi !');
            console.log('ID du message:', result.messageId);
            console.log(`Un email de test a été envoyé à ${testEmail}`);
            console.log('Veuillez vérifier votre boîte de réception.');
        } else {
            console.log('\n❌ Échec du test');
            console.log('Erreur:', result.error);
            if (result.error && result.error.code) {
                console.log('Code d\'erreur:', result.error.code);
                console.log('Réponse du serveur:', result.error.response);
            }
        }
    } catch (error) {
        console.error('\n❌ Erreur lors de l\'exécution du test:');
        console.error('Message:', error.message);
        if (error.code) console.error('Code:', error.code);
        if (error.response) console.error('Réponse du serveur:', error.response);
        if (error.command) console.error('Commande:', error.command);
    }
}

// Exécuter le test
runEmailTest(); 