import React from 'react';
import AuthService from '../../services/auth.service';

// Composant ModuleCard
const ModuleCard = ({ 
    title, 
    icon: Icon, 
    bgColor, 
    textColor, 
    onClick, 
    requiredPermission,
    currentUser 
}) => {
    const hasPermission = !requiredPermission || AuthService.hasPermission(currentUser, requiredPermission);

    if (!hasPermission) return null;

    return (
        <button
            onClick={onClick}
            className={`${bgColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left w-full`}
        >
            <Icon className={`w-6 h-6 ${textColor} mb-3`} />
            <div className={`font-semibold ${textColor}`}>{title}</div>
        </button>
    );
};

export default ModuleCard;