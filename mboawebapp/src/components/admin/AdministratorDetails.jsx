import React, { useState } from 'react';
import { Check, Clock, X } from 'lucide-react';
import { config } from '../../config/env';

const AdministratorDetails = ({ admin, onAdminUpdated }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Liste des permissions disponibles
    const availablePermissions = [
        { id: 'manage_users', label: 'Gestion des utilisateurs' },
        { id: 'manage_events', label: 'Gestion des événements' },
        { id: 'manage_partners', label: 'Gestion des partenaires' },
        { id: 'manage_transactions', label: 'Gestion des transactions' },
        { id: 'manage_ads', label: 'Gestion des publicités' },
        { id: 'manage_chats', label: 'Gestion de la messagerie' },
        { id: 'validate_admins', label: 'Validation des administrateurs' }
    ];

    if (!admin) {
        return (
            <div className="h-full flex items-center justify-center text-gray-500">
                Sélectionnez un administrateur pour voir les détails
            </div>
        );
    }

    const handleApprove = async () => {
        try {
            setLoading(true);
            setError(null);

            // Vérifier si l'ID de l'admin est valide
            if (!admin._id) {
                throw new Error('ID de l\'administrateur non valide');
            }

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token non trouvé');
            }

            // Construire l'URL de l'API en s'assurant qu'elle est bien formée
            const baseUrl = config.API_URL.replace(/\/$/, ''); // Enlever le slash final s'il existe
            const apiUrl = `${baseUrl}/api/users/${admin._id}`;
            console.log('URL de l\'API:', apiUrl);

            // Préparer les données à envoyer
            const requestData = {
                permissions: selectedPermissions,
                isAdminValidated: true,
                role: 'admin' // Assurer que le rôle est bien défini
            };
            console.log('Données envoyées:', requestData);

            const response = await fetch(apiUrl, {
                method: 'PUT', // Utiliser PUT pour la mise à jour d'un utilisateur existant
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            // Log de la réponse brute pour le débogage
            const responseText = await response.text();
            console.log('Réponse brute:', responseText);

            if (!response.ok) {
                // Essayer de parser la réponse comme JSON
                let errorMessage = 'Erreur lors de la validation de l\'administrateur';
                try {
                    const errorData = JSON.parse(responseText);
                    errorMessage = errorData.message || errorMessage;
                } catch (e) {
                    // Si ce n'est pas du JSON valide, utiliser le texte brut
                    if (responseText.includes('<!DOCTYPE html>')) {
                        errorMessage = `Erreur serveur: L'API n'est pas accessible ou l'endpoint n'existe pas. Vérifiez que le serveur est en cours d'exécution.`;
                    } else {
                        errorMessage = `Erreur serveur: ${responseText.substring(0, 100)}...`;
                    }
                }
                throw new Error(errorMessage);
            }

            // Essayer de parser la réponse comme JSON
            let data;
            try {
                data = JSON.parse(responseText);
                console.log('Données reçues:', data);
            } catch (e) {
                throw new Error('Réponse invalide du serveur');
            }

            setIsModalOpen(false);
            if (onAdminUpdated) {
                onAdminUpdated();
            }
        } catch (err) {
            console.error('Erreur complète:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const togglePermission = (permissionId) => {
        setSelectedPermissions(prev => 
            prev.includes(permissionId)
                ? prev.filter(p => p !== permissionId)
                : [...prev, permissionId]
        );
    };

    return (
        <div className="h-full p-6 bg-gray-50">
            {error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                </div>
            )}

            {/* Header */}
            <div className="flex items-center mb-8">
                <div className="flex-shrink-0">
                    {admin.avatar ? (
                        <img
                            src={admin.avatar}
                            alt={`${admin.firstName} ${admin.lastName}`}
                            className="h-16 w-16 rounded-full"
                        />
                    ) : (
                        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-xl font-medium">
                                {admin.firstName?.[0]}
                                {admin.lastName?.[0]}
                            </span>
                        </div>
                    )}
                </div>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {admin.firstName} {admin.lastName}
                    </h2>
                    <p className="text-gray-500">{admin.email}</p>
                    <p className="text-sm text-gray-400">@{admin.username}</p>
                </div>
                {!admin.isAdminValidated && (
                    <button
                        onClick={() => setIsModalOpen(true)}
                        disabled={loading}
                        className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                    >
                        {loading ? 'Validation...' : 'APPROUVER'}
                    </button>
                )}
            </div>

            {/* Permissions actuelles */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Permissions</h3>
                <div className="flex flex-wrap gap-2">
                    {admin.permissions?.map((permission) => (
                        <div key={permission} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg">
                            <span className="text-sm font-medium">
                                {availablePermissions.find(p => p.id === permission)?.label || permission}
                            </span>
                        </div>
                    ))}
                    {(!admin.permissions || admin.permissions.length === 0) && (
                        <p className="text-gray-500 text-sm">Aucune permission attribuée</p>
                    )}
                </div>
            </div>

            {/* Modal de sélection des permissions */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Sélectionner les permissions</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-3 mb-6">
                            {availablePermissions.map((permission) => (
                                <label key={permission.id} className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={selectedPermissions.includes(permission.id)}
                                        onChange={() => togglePermission(permission.id)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-gray-700">{permission.label}</span>
                                </label>
                            ))}
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleApprove}
                                disabled={loading}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                            >
                                {loading ? 'Validation...' : 'Valider'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Activity */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Activités récentes</h3>
                <div className="space-y-4">
                    {admin.activities?.map((activity, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                </div>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-gray-600">
                                    {activity.description}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                    {new Date(activity.timestamp).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                    {(!admin.activities || admin.activities.length === 0) && (
                        <p className="text-gray-500 text-sm">Aucune activité récente</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdministratorDetails; 