import React, { useState, useEffect } from 'react';
import { Search, Filter, Calendar, Users, MessageSquare, Heart, Plus } from 'lucide-react';
import { config } from '../../config/env';
import EventList from '../../components/events/EventList';
import EventDetails from '../../components/events/EventDetails';
import AddEventModal from '../../components/events/AddEventModal';

const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [filters, setFilters] = useState({
        status: 'all',
        category: 'all',
        date: 'all'
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token non trouvé');
            }

            const response = await fetch(`${config.API_URL}/api/events`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des événements');
            }

            const data = await response.json();
            setEvents(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const handleAddEvent = async (eventData) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/events`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: eventData // FormData contenant les images et les données JSON
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la création de l\'événement');
            }

            await fetchEvents();
            setShowAddModal(false);
        } catch (err) {
            throw err;
        }
    };

    const handleEventStatusUpdate = async (eventId, action) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/events/${eventId}/${action}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Erreur lors de la mise à jour du statut de l'événement`);
            }

            await fetchEvents();
            
            if (selectedEvent?._id === eventId) {
                const updatedEvent = events.find(e => e._id === eventId);
                setSelectedEvent(updatedEvent);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const filteredEvents = events.filter(event => {
        const matchesSearch = 
            event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location?.address?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = filters.status === 'all' || event.status === filters.status;
        const matchesCategory = filters.category === 'all' || event.category === filters.category;
        
        let matchesDate = true;
        const today = new Date();
        const eventDate = new Date(event.startDateTime);

        switch (filters.date) {
            case 'upcoming':
                matchesDate = eventDate > today;
                break;
            case 'past':
                matchesDate = eventDate < today;
                break;
            case 'today':
                matchesDate = eventDate.toDateString() === today.toDateString();
                break;
            default:
                matchesDate = true;
        }

        return matchesSearch && matchesStatus && matchesCategory && matchesDate;
    });

    return (
        <div className="h-full bg-gray-50">
            {/* En-tête de la page */}
            <div className="bg-white border-b border-gray-200 px-8 py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Gestion des Événements</h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Gérez et supervisez tous les événements de la plateforme
                        </p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Créer un événement
                    </button>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="flex h-[calc(100vh-12rem)]">
                {/* Section gauche - Liste des événements */}
                <div className="w-2/3 border-r border-gray-200 bg-white p-6">
                    {/* Barre de recherche et filtres */}
                    <div className="mb-6">
                        <div className="flex gap-4 mb-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Rechercher un événement..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                <Filter className="w-5 h-5 mr-2" />
                                Filtres
                            </button>
                        </div>

                        {/* Filtres */}
                        <div className="flex gap-4">
                            <select
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={filters.status}
                                onChange={(e) => handleFilterChange('status', e.target.value)}
                            >
                                <option value="all">Tous les statuts</option>
                                <option value="published">Publié</option>
                                <option value="draft">Brouillon</option>
                                <option value="cancelled">Annulé</option>
                            </select>

                            <select
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={filters.category}
                                onChange={(e) => handleFilterChange('category', e.target.value)}
                            >
                                <option value="all">Toutes les catégories</option>
                                <option value="concert">Concert</option>
                                <option value="festival">Festival</option>
                                <option value="conference">Conférence</option>
                                <option value="sport">Sport</option>
                                <option value="art">Art & Culture</option>
                                <option value="food">Gastronomie</option>
                                <option value="business">Business</option>
                                <option value="other">Autre</option>
                            </select>

                            <select
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={filters.date}
                                onChange={(e) => handleFilterChange('date', e.target.value)}
                            >
                                <option value="all">Toutes les dates</option>
                                <option value="upcoming">À venir</option>
                                <option value="past">Passés</option>
                                <option value="today">Aujourd'hui</option>
                            </select>
                        </div>
                    </div>

                    {/* Liste des événements */}
                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-600 p-4">
                            {error}
                        </div>
                    ) : (
                        <EventList 
                            events={filteredEvents}
                            onEventSelect={handleEventSelect}
                            selectedEventId={selectedEvent?._id}
                            onEventStatusUpdate={handleEventStatusUpdate}
                        />
                    )}
                </div>

                {/* Section droite - Détails de l'événement */}
                <div className="w-1/3 bg-white p-6">
                    {selectedEvent ? (
                        <EventDetails 
                            event={selectedEvent} 
                            onEventUpdated={fetchEvents}
                            onEventStatusUpdate={handleEventStatusUpdate}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Sélectionnez un événement pour voir les détails
                        </div>
                    )}
                </div>
            </div>

            {/* Modal d'ajout d'événement */}
            {showAddModal && (
                <AddEventModal
                    onClose={() => setShowAddModal(false)}
                    onAdd={handleAddEvent}
                />
            )}
        </div>
    );
};

export default EventPage; 