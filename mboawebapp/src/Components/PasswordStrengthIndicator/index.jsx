import React from 'react';

const strengthLevels = {
  0: { color: 'bg-gray-200', label: 'Aucun' },
  1: { color: 'bg-red-500', label: 'Faible' },
  2: { color: 'bg-orange-500', label: 'Moyen' },
  3: { color: 'bg-green-500', label: 'Fort' }
};

const calculatePasswordStrength = (password) => {
  if (!password) return 0;
  
  let strength = 0;
  
  // Longueur minimale
  if (password.length >= 8) strength++;
  
  // Présence de chiffres et de lettres
  if (/\d/.test(password) && /[a-zA-Z]/.test(password)) strength++;
  
  // Présence de caractères spéciaux ou de majuscules
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password) || /[A-Z]/.test(password)) strength++;
  
  return strength;
};

const PasswordStrengthIndicator = ({ password }) => {
  const strength = calculatePasswordStrength(password);
  const { color, label } = strengthLevels[strength];

  return (
    <div className="mt-2">
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          {[1, 2, 3].map((level) => (
            <div
              key={level}
              className={`h-full w-1/3 transition-all duration-300 ${
                level <= strength ? strengthLevels[level].color : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600 min-w-[4rem]">{label}</span>
      </div>
      
      <div className="mt-2 text-xs text-gray-500">
        <p>Le mot de passe doit contenir :</p>
        <ul className="list-disc list-inside">
          <li className={password?.length >= 8 ? 'text-green-600' : ''}>
            Au moins 8 caractères
          </li>
          <li className={/[A-Z]/.test(password) ? 'text-green-600' : ''}>
            Une lettre majuscule
          </li>
          <li className={/\d/.test(password) ? 'text-green-600' : ''}>
            Un chiffre
          </li>
          <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-600' : ''}>
            Un caractère spécial
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator; 