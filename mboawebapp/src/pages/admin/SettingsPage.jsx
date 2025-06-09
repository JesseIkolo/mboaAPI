import React, { useState, useEffect } from 'react';
import { Save, AlertCircle } from 'lucide-react';
import { config } from '../../config/env';

const SettingsPage = () => {
    const [settings, setSettings] = useState({
        general: {
            siteName: '',
            siteDescription: '',
            contactEmail: '',
            supportPhone: ''
        },
        events: {
            maxEventsPerUser: 10,
            maxParticipantsPerEvent: 1000,
            requireApproval: false,
            allowMultipleTickets: true
        },
        notifications: {
            emailNotifications: true,
            pushNotifications: false,
            notifyOnNewEvent: true,
            notifyOnEventUpdate: true,
            notifyOnRegistration: true
        },
        security: {
            requireEmailVerification: true,
            passwordMinLength: 8,
            sessionTimeout: 24,
            maxLoginAttempts: 5
        }
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/admin/settings`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error('Erreur lors de la récupération des paramètres');

            const data = await response.json();
            setSettings(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (section, field, value) => {
        setSettings(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setSaving(true);
            setError(null);
            setSuccess(false);

            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/admin/settings`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(settings)
            });

            if (!response.ok) throw new Error('Erreur lors de la sauvegarde des paramètres');

            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                    Paramètres
                </h1>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center text-red-600">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-600">
                        Les paramètres ont été sauvegardés avec succès.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Paramètres généraux */}
                    <section className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">
                            Paramètres généraux
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nom du site
                                </label>
                                <input
                                    type="text"
                                    value={settings.general.siteName}
                                    onChange={(e) => handleChange('general', 'siteName', e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Description du site
                                </label>
                                <textarea
                                    value={settings.general.siteDescription}
                                    onChange={(e) => handleChange('general', 'siteDescription', e.target.value)}
                                    rows="3"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email de contact
                                </label>
                                <input
                                    type="email"
                                    value={settings.general.contactEmail}
                                    onChange={(e) => handleChange('general', 'contactEmail', e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Téléphone support
                                </label>
                                <input
                                    type="tel"
                                    value={settings.general.supportPhone}
                                    onChange={(e) => handleChange('general', 'supportPhone', e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Paramètres des événements */}
                    <section className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">
                            Paramètres des événements
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nombre maximum d'événements par utilisateur
                                </label>
                                <input
                                    type="number"
                                    value={settings.events.maxEventsPerUser}
                                    onChange={(e) => handleChange('events', 'maxEventsPerUser', parseInt(e.target.value))}
                                    min="1"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nombre maximum de participants par événement
                                </label>
                                <input
                                    type="number"
                                    value={settings.events.maxParticipantsPerEvent}
                                    onChange={(e) => handleChange('events', 'maxParticipantsPerEvent', parseInt(e.target.value))}
                                    min="1"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.events.requireApproval}
                                        onChange={(e) => handleChange('events', 'requireApproval', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">
                                        Nécessite une approbation
                                    </span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.events.allowMultipleTickets}
                                        onChange={(e) => handleChange('events', 'allowMultipleTickets', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">
                                        Autoriser plusieurs types de billets
                                    </span>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Paramètres des notifications */}
                    <section className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">
                            Paramètres des notifications
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications.emailNotifications}
                                        onChange={(e) => handleChange('notifications', 'emailNotifications', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">
                                        Activer les notifications par email
                                    </span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications.pushNotifications}
                                        onChange={(e) => handleChange('notifications', 'pushNotifications', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">
                                        Activer les notifications push
                                    </span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications.notifyOnNewEvent}
                                        onChange={(e) => handleChange('notifications', 'notifyOnNewEvent', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">
                                        Notifier lors de la création d'un événement
                                    </span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications.notifyOnEventUpdate}
                                        onChange={(e) => handleChange('notifications', 'notifyOnEventUpdate', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">
                                        Notifier lors de la mise à jour d'un événement
                                    </span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications.notifyOnRegistration}
                                        onChange={(e) => handleChange('notifications', 'notifyOnRegistration', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">
                                        Notifier lors d'une nouvelle inscription
                                    </span>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Paramètres de sécurité */}
                    <section className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">
                            Paramètres de sécurité
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.security.requireEmailVerification}
                                        onChange={(e) => handleChange('security', 'requireEmailVerification', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">
                                        Vérification d'email requise
                                    </span>
                                </label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Longueur minimale du mot de passe
                                </label>
                                <input
                                    type="number"
                                    value={settings.security.passwordMinLength}
                                    onChange={(e) => handleChange('security', 'passwordMinLength', parseInt(e.target.value))}
                                    min="6"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Durée de session (heures)
                                </label>
                                <input
                                    type="number"
                                    value={settings.security.sessionTimeout}
                                    onChange={(e) => handleChange('security', 'sessionTimeout', parseInt(e.target.value))}
                                    min="1"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Tentatives de connexion maximales
                                </label>
                                <input
                                    type="number"
                                    value={settings.security.maxLoginAttempts}
                                    onChange={(e) => handleChange('security', 'maxLoginAttempts', parseInt(e.target.value))}
                                    min="1"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Bouton de sauvegarde */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={saving}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <Save className="w-4 h-4 mr-2" />
                            {saving ? 'Sauvegarde en cours...' : 'Sauvegarder les paramètres'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingsPage; 