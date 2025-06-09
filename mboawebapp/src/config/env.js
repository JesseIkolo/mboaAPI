export const config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:2103',
  AUTH_ENDPOINTS: {
    LOGIN: '/api/users/login',
    REGISTER: '/api/users/register',
    VERIFY_OTP: '/api/users/verify-otp',
    RESEND_OTP: '/api/users/resend-otp',
    RESET_PASSWORD: '/api/auth/reset-password',
    NEW_PASSWORD: '/api/auth/new-password',
    WAITING_LIST: '/api/waitlist',
    SEND_CONFIRMATION: '/api/users/send-confirmation'
  }
};

// Fonction utilitaire pour vérifier si toutes les variables d'environnement requises sont définies
export const validateEnv = () => {
  const requiredEnvVars = ['REACT_APP_API_URL'];
  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0) {
    console.warn(
      `Warning: Missing environment variables: ${missingEnvVars.join(', ')}`
    );
    return false;
  }

  return true;
};

// Configuration du Super Admin
export const SUPER_ADMIN = {
  USERNAME: 'superadmin',
  EMAIL: 'admin@mboaevents.com',
  PHONE: '+237600000000',
  PASSWORD: 'SuperAdmin@123',
  FIRSTNAME: 'Super',
  LASTNAME: 'Admin'
};

// Configuration de la base de données de test
export const DB_CONFIG = {
  MONGODB_URI_TEST: 'mongodb://localhost:27017/mboaevents_test'
}; 