import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const EventList = ({ events, onEventSelect, selectedEventId, onEventStatusUpdate }) => {
    const formatDate = (dateString) => {
        if (!dateString) return 'Date non spécifiée';
        
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return 'Date invalide';
            
            return new Intl.DateTimeFormat('fr-FR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }).format(date);
        } catch (error) {
            console.error('Erreur de formatage de la date:', error);
            return 'Date invalide';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'published':
                return 'bg-green-100 text-green-800';
            case 'draft':
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'published':
                return 'Publié';
            case 'draft':
                return 'Brouillon';
            case 'cancelled':
                return 'Annulé';
            default:
                return status || 'Statut inconnu';
        }
    };

    return (
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-20rem)]">
            {!events || events.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                    Aucun événement trouvé
                </div>
            ) : (
                events.map(event => (
                    <div
                        key={event._id}
                        className={`p-4 rounded-lg border ${
                            selectedEventId === event._id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 bg-white hover:bg-gray-50'
                        } cursor-pointer transition-colors duration-200`}
                        onClick={() => onEventSelect(event)}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-medium text-gray-900 truncate flex-1">
                                {event.title || 'Sans titre'}
                            </h3>
                            <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                                {getStatusText(event.status)}
                            </span>
                        </div>

                        <div className="space-y-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {formatDate(event.startDateTime)}
                            </div>

                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="truncate">
                                    {event.location?.address ? `${event.location.address}${event.location.city ? `, ${event.location.city}` : ''}` : 'Lieu non spécifié'}
                                </span>
                            </div>

                            <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                <span>
                                    {event.participants?.length || 0} / {event.maxParticipants || '∞'} participants
                                </span>
                            </div>
                        </div>

                        {event.status === 'draft' && (
                            <div className="mt-3 flex justify-end space-x-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onEventStatusUpdate(event._id, 'publish');
                                    }}
                                    className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-700"
                                >
                                    Publier
                                </button>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default EventList; 