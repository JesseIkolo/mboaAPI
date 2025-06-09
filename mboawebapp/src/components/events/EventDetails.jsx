import React, { useState } from 'react';
import { Calendar, MapPin, Users, MessageSquare, Heart, Edit2, Trash2, AlertCircle } from 'lucide-react';
import { config } from '../../config/env';

const EventDetails = ({ event, onEventUpdated, onEventStatusUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedEvent, setEditedEvent] = useState(event);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fr-FR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    const handleEdit = () => {
        setIsEditing(true);
        setEditedEvent({ ...event });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedEvent(event);
        setError(null);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setEditedEvent(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setEditedEvent(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleSave = async () => {
        try {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/events/${event._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedEvent)
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour de l\'événement');
            }

            await onEventUpdated();
            setIsEditing(false);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/events/${event._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la suppression de l\'événement');
            }

            await onEventUpdated();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!event) return null;

    return (
        <div className="h-full overflow-y-auto">
            {/* En-tête */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                        {isEditing ? (
                            <input
                                type="text"
                                name="title"
                                value={editedEvent.title}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        ) : (
                            event.title
                        )}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Créé par {event.creator?.name || 'Anonyme'}
                    </p>
                </div>

                <div className="flex space-x-2">
                    {!isEditing && (
                        <>
                            <button
                                onClick={handleEdit}
                                className="p-2 text-gray-600 hover:text-blue-600"
                            >
                                <Edit2 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleDelete}
                                className="p-2 text-gray-600 hover:text-red-600"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center text-red-600">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {error}
                </div>
            )}

            {/* Contenu principal */}
            <div className="space-y-6">
                {/* Date et heure */}
                <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3" />
                    <div>
                        <p className="font-medium">Date et heure</p>
                        {isEditing ? (
                            <div className="mt-1 grid grid-cols-2 gap-2">
                                <input
                                    type="datetime-local"
                                    name="startDateTime"
                                    value={editedEvent.startDateTime?.slice(0, 16)}
                                    onChange={handleChange}
                                    className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                                <input
                                    type="datetime-local"
                                    name="endDateTime"
                                    value={editedEvent.endDateTime?.slice(0, 16)}
                                    onChange={handleChange}
                                    className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        ) : (
                            <p className="text-sm mt-1">
                                Du {formatDate(event.startDateTime)} au {formatDate(event.endDateTime)}
                            </p>
                        )}
                    </div>
                </div>

                {/* Localisation */}
                <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3" />
                    <div>
                        <p className="font-medium">Lieu</p>
                        {isEditing ? (
                            <div className="mt-1 space-y-2">
                                <input
                                    type="text"
                                    name="location.address"
                                    value={editedEvent.location?.address}
                                    onChange={handleChange}
                                    placeholder="Adresse"
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    name="location.city"
                                    value={editedEvent.location?.city}
                                    onChange={handleChange}
                                    placeholder="Ville"
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        ) : (
                            <p className="text-sm mt-1">
                                {event.location?.address}, {event.location?.city}
                            </p>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                    {isEditing ? (
                        <textarea
                            name="description"
                            value={editedEvent.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    ) : (
                        <p className="text-sm text-gray-600 whitespace-pre-wrap">
                            {event.description}
                        </p>
                    )}
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200">
                    <div className="text-center">
                        <div className="flex items-center justify-center text-gray-500">
                            <Users className="w-5 h-5 mr-1" />
                            <span className="text-lg font-semibold">
                                {event.participants?.length || 0}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Participants</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center text-gray-500">
                            <MessageSquare className="w-5 h-5 mr-1" />
                            <span className="text-lg font-semibold">
                                {event.comments?.length || 0}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Commentaires</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center text-gray-500">
                            <Heart className="w-5 h-5 mr-1" />
                            <span className="text-lg font-semibold">
                                {event.likes || 0}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">J'aime</p>
                    </div>
                </div>

                {/* Actions */}
                {isEditing ? (
                    <div className="flex justify-end space-x-3">
                        <button
                            onClick={handleCancel}
                            disabled={loading}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Annuler
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                            {loading ? 'Enregistrement...' : 'Enregistrer'}
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-end space-x-3">
                        {event.status === 'draft' && (
                            <button
                                onClick={() => onEventStatusUpdate(event._id, 'publish')}
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                            >
                                Publier
                            </button>
                        )}
                        {event.status === 'published' && (
                            <button
                                onClick={() => onEventStatusUpdate(event._id, 'cancel')}
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                            >
                                Annuler
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventDetails; 