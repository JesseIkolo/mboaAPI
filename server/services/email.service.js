// --- services/email.service.js ---

const sendEmailValidation = async (email, token) => {
  console.log(`Lien de validation envoyé à ${email}: https://example.com/verify-email?token=${token}`);
};

const sendOTPByEmail = async (email, otp) => {
  console.log(`OTP ${otp} envoyé par email à ${email}`);
};

const sendOTPBySMS = async (phone, otp) => {
  console.log(`OTP ${otp} envoyé par SMS à ${phone}`);
};

const sendOTPByWhatsApp = async (phone, otp) => {
  console.log(`OTP ${otp} envoyé par WhatsApp à ${phone}`);
};

const checkWhatsAppNumber = async (phone) => {
  // ⚠️ Logique fictive à remplacer par une vraie API
  return phone.endsWith('0'); // par exemple : les numéros finissant par 0 ont WhatsApp
};

module.exports = {
  sendEmailValidation,
  sendOTPByEmail,
  sendOTPBySMS,
  sendOTPByWhatsApp,
  checkWhatsAppNumber
};