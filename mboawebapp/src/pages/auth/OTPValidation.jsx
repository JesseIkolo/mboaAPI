import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { config } from '../../config/env';

const OTPValidation = ({ onVerify }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
    const inputRefs = useRef([]);

    // Timer effect
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    // Format time remaining
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Handle input change
    const handleChange = (index, value) => {
        if (value.length <= 1 && /^[0-9]*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to next input if value is entered
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    // Handle backspace
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const newOtp = [...otp];
            newOtp[index - 1] = '';
            setOtp(newOtp);
            inputRefs.current[index - 1].focus();
        }
    };

    // Handle paste
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (/^[0-9]{1,6}$/.test(pastedData)) {
            const newOtp = [...otp];
            pastedData.split('').forEach((char, index) => {
                if (index < 6) newOtp[index] = char;
            });
            setOtp(newOtp);
        }
    };

    // Resend OTP
    const handleResendOTP = async () => {
        try {
            setLoading(true);
            const email = localStorage.getItem('userEmail');

            if (!email) {
                throw new Error('Email non trouvé. Veuillez vous réinscrire.');
            }

            console.log('Envoi de la requête de renvoi OTP à:', `${config.API_URL}${config.AUTH_ENDPOINTS.RESEND_OTP}`);
            
            const response = await fetch(`${config.API_URL}${config.AUTH_ENDPOINTS.RESEND_OTP}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            console.log('Réponse reçue:', response.status);

            // Si la réponse n'est pas JSON, afficher le texte brut
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text();
                console.error('Réponse non-JSON reçue:', text);
                throw new Error('Format de réponse invalide du serveur');
            }

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Erreur lors de l\'envoi du code');
            }

            toast.success('Nouveau code OTP envoyé !');
            setTimeLeft(300); // Reset timer
            
            // Réinitialiser les champs OTP
            setOtp(['', '', '', '', '', '']);
            if (inputRefs.current[0]) {
                inputRefs.current[0].focus();
            }

        } catch (error) {
            console.error('Erreur lors du renvoi du code OTP:', error);
            toast.error(error.message || 'Erreur lors de l\'envoi du code');
        } finally {
            setLoading(false);
        }
    };

    // Submit OTP
    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpString = otp.join('');
        
        if (otpString.length !== 6) {
            toast.error('Veuillez entrer les 6 chiffres du code');
            return;
        }

        try {
            setLoading(true);
            await onVerify(otpString);
        } catch (error) {
            console.error('Erreur lors de la validation OTP:', error);
            toast.error(error.message || 'Erreur lors de la validation du code');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Validation du compte
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Entrez le code à 6 chiffres envoyé à votre email
                </p>
                <p className="mt-1 text-center text-sm text-gray-500">
                    {localStorage.getItem('userEmail')}
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Code OTP
                            </label>
                            <div className="mt-1 flex justify-center space-x-2">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={el => inputRefs.current[index] = el}
                                        type="text"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        onPaste={handlePaste}
                                        className="block w-12 h-12 text-2xl text-center font-semibold border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading || timeLeft === 0}
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                                    loading || timeLeft === 0
                                        ? 'bg-indigo-400 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                }`}
                            >
                                {loading ? 'Validation...' : 'Valider le code'}
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Temps restant : {formatTime(timeLeft)}
                            </p>
                            {timeLeft === 0 && (
                                <button
                                    type="button"
                                    onClick={handleResendOTP}
                                    disabled={loading}
                                    className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Renvoyer le code
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OTPValidation; 