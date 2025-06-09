import React from 'react';

// Composant StatCard
const StatCard = ({ title, value, bgColor = 'bg-white', isLoading = false, error = null }) => {
    return (
        <div className={`${bgColor} p-6 StatCard rounded-xl shadow-sm border border-gray-200`}>
            {isLoading ? (
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
            ) : error ? (
                <div className="text-red-500 text-sm">Erreur de chargement</div>
            ) : (
                <>
                    <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
                    <p className="text-sm text-gray-600 mb-2">{title}</p>
                </>
            )}
        </div>
    );
};

export default StatCard;

