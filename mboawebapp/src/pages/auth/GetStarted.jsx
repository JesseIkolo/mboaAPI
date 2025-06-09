import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, Key } from 'lucide-react';
import { config } from '../../config/env';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../contexts/NotificationContext';
import PasswordStrengthIndicator from '../../components/passwordstrengthindicator';
import OTPValidation from './OTPValidation';

export default function AuthInterface() {
  const navigate = useNavigate();
  const { showError, showSuccess, showInfo } = useNotification();
  const [isLogin, setIsLogin] = useState(true);
  const [loginMethod, setLoginMethod] = useState('username'); // 'username', 'email', 'phone'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('login'); // 'login', 'otp', 'reset-password', 'new-password'
  
  // Champs de connexion
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Champs OTP
  const [otpCode, setOtpCode] = useState('');
  
  // Champs de réinitialisation
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  
  // Champs d'inscription
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    adminType: 'admin'
  });

  const handleLogin = async () => {
    try {
      // Validation des champs
      if (!loginIdentifier && !loginPassword) {
        showError('Identifiant et mot de passe requis');
        return;
      }
      
      if (!loginIdentifier) {
        showError(`${loginMethod === 'email' ? 'Email' : 
                   loginMethod === 'phone' ? 'Numéro de téléphone' : 
                   'Nom d\'utilisateur'} requis`);
        return;
      }
      
      if (!loginPassword) {
        showError('Mot de passe requis');
        return;
      }

      setIsLoading(true);
      setError('');

      // Préparation des données de connexion
      const loginData = {
        identifier: loginIdentifier,
        password: loginPassword
      };

      const response = await fetch(`${config.API_URL}${config.AUTH_ENDPOINTS.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.requiresOTP) {
          showInfo('Un code OTP a été envoyé pour vérification');
          // Stocker l'email pour la validation OTP
          localStorage.setItem('userEmail', loginIdentifier);
          setCurrentStep('otp');
          return;
        }
        if (response.status === 403) {
          showError(`Compte bloqué. Réessayez après ${new Date(data.lockUntil).toLocaleString()}`);
        } else {
          showError(data.message || 'Identifiants invalides');
        }
        return;
      }

      // Vérifier si l'utilisateur est un administrateur validé
      if (!data.user || !data.user.isAdminValidated) {
        showError('Accès réservé aux administrateurs validés');
        return;
      }

      // Stocker le token et les informations utilisateur
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      showSuccess('Connexion réussie !');
      
      // Redirection vers la page admin
      setTimeout(() => {
        navigate('/admin', { replace: true });
      }, 1000);

    } catch (err) {
      console.error('Erreur de connexion:', err);
      showError('Erreur de connexion au serveur');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPVerification = async (otpCode) => {
    try {
      setIsLoading(true);
      const email = localStorage.getItem('userEmail');

      const response = await fetch(`${config.API_URL}${config.AUTH_ENDPOINTS.VERIFY_OTP}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp: otpCode
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Code OTP invalide');
      }

      // Envoyer l'email de confirmation
      const confirmResponse = await fetch(`${config.API_URL}/api/users/send-confirmation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      if (!confirmResponse.ok) {
        const confirmData = await confirmResponse.json();
        throw new Error(confirmData.message || 'Erreur lors de l\'envoi de l\'email de confirmation');
      }

      showSuccess('Compte vérifié avec succès! Un email de confirmation vous a été envoyé.');
      
      // Rediriger vers la page de connexion
      setCurrentStep('login');
      setIsLogin(true);

    } catch (err) {
      console.error('Erreur lors de la vérification OTP:', err);
      showError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`${config.API_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: resetEmail
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        showError(data.message || 'Erreur lors de la réinitialisation');
        return;
      }

      setCurrentStep('otp');
      showSuccess('Un code de réinitialisation a été envoyé à votre adresse email');

    } catch (err) {
      showError(err.message || 'Erreur lors de la demande de réinitialisation');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewPassword = async () => {
    try {
      if (newPassword !== confirmNewPassword) {
        showError('Les mots de passe ne correspondent pas');
        return;
      }

      setIsLoading(true);

      const response = await fetch(`${config.API_URL}/api/auth/new-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: resetEmail,
          otp: otpCode,
          newPassword
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        showError(data.message || 'Erreur lors du changement de mot de passe');
        return;
      }

      setCurrentStep('login');
      showSuccess('Mot de passe modifié avec succès');

    } catch (err) {
      showError(err.message || 'Erreur lors du changement de mot de passe');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      if (registerData.password !== registerData.confirmPassword) {
        showError('Les mots de passe ne correspondent pas');
        return;
      }

      setError('');
      setIsLoading(true);

      const response = await fetch(`${config.API_URL}${config.AUTH_ENDPOINTS.REGISTER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: registerData.username,
          email: registerData.email,
          phone: registerData.phone,
          password: registerData.password,
          firstName: registerData.firstName,
          lastName: registerData.lastName,
          role: registerData.adminType
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'inscription');
      }

      // Stocker l'email pour la validation OTP
      localStorage.setItem('userEmail', registerData.email);
      
      // Afficher un message de succès et passer à l'étape OTP
      showSuccess('Inscription réussie! Veuillez vérifier votre email pour le code OTP.');
      setCurrentStep('otp');

    } catch (err) {
      showError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getLoginPlaceholder = () => {
    switch (loginMethod) {
      case 'email':
        return 'exemple@email.com';
      case 'phone':
        return '+237 6XX XXX XXX';
      default:
        return 'Nom d\'utilisateur';
    }
  };

  const getLoginIcon = () => {
    switch (loginMethod) {
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'phone':
        return <Phone className="w-5 h-5" />;
      default:
        return <User className="w-5 h-5" />;
    }
  };

  // Ajouter l'indicateur de force du mot de passe après les champs de mot de passe
  const renderPasswordField = (value, onChange, placeholder, showPasswordState, setShowPasswordState) => (
    <div className="relative">
      <input
        type={showPasswordState ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={() => setShowPasswordState(!showPasswordState)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        {showPasswordState ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
      {value && <PasswordStrengthIndicator password={value} />}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <div className="text-blue-600 text-2xl font-bold mr-2">MBOA</div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-red-500 rounded-full ml-1"></div>
                  <div className="w-1 h-1 bg-red-500 rounded-full ml-1"></div>
                </div>
              </div>
            </div>
            <div className="text-blue-600 text-2xl font-bold ml-2">EVENTS</div>
          </div>
        </div>

        {currentStep === 'login' && (
          <>
            {/* Switch entre Login et Register */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  isLogin 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Se Connecter
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  !isLogin 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                S'inscrire
              </button>
            </div>

            {/* Affichage des erreurs */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {isLogin ? (
              /* Interface de Connexion */
              <div className="space-y-6">
                {/* Méthode de connexion */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Se connecter avec
                  </label>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setLoginMethod('username')}
                      className={`flex-1 p-3 rounded-lg border flex items-center justify-center space-x-2 transition-all ${
                        loginMethod === 'username' 
                          ? 'border-blue-500 bg-blue-50 text-blue-600' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span className="text-xs">Nom</span>
                    </button>
                    <button
                      onClick={() => setLoginMethod('email')}
                      className={`flex-1 p-3 rounded-lg border flex items-center justify-center space-x-2 transition-all ${
                        loginMethod === 'email' 
                          ? 'border-blue-500 bg-blue-50 text-blue-600' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-xs">Email</span>
                    </button>
                    <button
                      onClick={() => setLoginMethod('phone')}
                      className={`flex-1 p-3 rounded-lg border flex items-center justify-center space-x-2 transition-all ${
                        loginMethod === 'phone' 
                          ? 'border-blue-500 bg-blue-50 text-blue-600' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-xs">Tél</span>
                    </button>
                  </div>
                </div>

                {/* Champ d'identification */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {loginMethod === 'email' ? 'Adresse Email' : 
                     loginMethod === 'phone' ? 'Numéro de Téléphone' : 
                     'Nom d\'utilisateur'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      {getLoginIcon()}
                    </div>
                    <input
                      type={loginMethod === 'email' ? 'email' : 'text'}
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder={getLoginPlaceholder()}
                    />
                  </div>
                </div>

                {/* Mot de passe */}
                <div>
                  {renderPasswordField(
                    loginPassword,
                    setLoginPassword,
                    "Mot de passe",
                    showPassword,
                    setShowPassword
                  )}
                </div>

                {/* Bouton de connexion */}
                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connexion...
                    </span>
                  ) : (
                    'Se connecter'
                  )}
                </button>

                {/* Lien mot de passe oublié */}
                <div className="text-right">
                  <button
                    onClick={() => setCurrentStep('reset-password')}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Mot de passe oublié ?
                  </button>
                </div>
              </div>
            ) : (
              /* Interface d'Inscription */
              <div className="space-y-4">
                {/* Nom et Prénom */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={registerData.firstName}
                      onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="Prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={registerData.lastName}
                      onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="Nom"
                    />
                  </div>
                </div>

                {/* Type d'administrateur */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type d'administrateur
                  </label>
                  <select
                    value={registerData.adminType}
                    onChange={(e) => setRegisterData({...registerData, adminType: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                  >
                    <option value="admin">Administrateur</option>
                    <option value="superadmin">Super Administrateur</option>
                  </select>
                </div>

                {/* Nom d'utilisateur */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom d'utilisateur
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      value={registerData.username}
                      onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="Nom d'utilisateur"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="exemple@email.com"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de Téléphone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="+237 6XX XXX XXX"
                    />
                  </div>
                </div>

                {/* Mot de passe */}
                <div>
                  {renderPasswordField(
                    registerData.password,
                    (value) => setRegisterData({...registerData, password: value}),
                    "Mot de passe",
                    showPassword,
                    setShowPassword
                  )}
                </div>

                {/* Confirmer mot de passe */}
                <div>
                  {renderPasswordField(
                    registerData.confirmPassword,
                    (value) => setRegisterData({...registerData, confirmPassword: value}),
                    "Confirmer le mot de passe",
                    showPassword,
                    setShowPassword
                  )}
                </div>

                {/* Bouton d'inscription */}
                <button
                  onClick={handleRegister}
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Inscription...
                    </span>
                  ) : (
                    "S'inscrire"
                  )}
                </button>
              </div>
            )}
          </>
        )}

        {currentStep === 'otp' && (
          <OTPValidation onVerify={handleOTPVerification} />
        )}

        {currentStep === 'reset-password' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">
              Réinitialisation du mot de passe
            </h3>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>

            <button
              onClick={handlePasswordReset}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Envoi...' : 'Envoyer le code'}
            </button>

            <div className="text-center">
              <button
                onClick={() => setCurrentStep('login')}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Retour à la connexion
              </button>
            </div>
          </div>
        )}

        {currentStep === 'new-password' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">
              Nouveau mot de passe
            </h3>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <div>
              {renderPasswordField(
                newPassword,
                setNewPassword,
                "Nouveau mot de passe",
                showPassword,
                setShowPassword
              )}
            </div>

            <div>
              {renderPasswordField(
                confirmNewPassword,
                setConfirmNewPassword,
                "Confirmer le mot de passe",
                showConfirmPassword,
                setShowConfirmPassword
              )}
            </div>

            <button
              onClick={handleNewPassword}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Modification...' : 'Modifier le mot de passe'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}