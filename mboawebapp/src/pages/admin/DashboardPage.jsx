import React, { useState, useEffect } from 'react';
import { Calendar, Users, Building2, TrendingUp, Activity, Clock } from 'lucide-react';
import { config } from '../../config/env';

const DashboardPage = () => {
    const [stats, setStats] = useState({
        totalEvents: 0,
        activeEvents: 0,
        totalUsers: 0,
        totalPartners: 0,
        recentEvents: [],
        topEvents: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDashboardStats();
    }, []);

    const fetchDashboardStats = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/admin/dashboard`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error('Erreur lors de la récupération des statistiques');

            const data = await response.json();
            setStats(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-50 text-red-600">
                {error}
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                Tableau de bord
            </h1>

            {/* Statistiques générales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Calendar className="w-10 h-10 text-blue-500" />
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Total Événements</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalEvents}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Activity className="w-10 h-10 text-green-500" />
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Événements Actifs</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.activeEvents}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Users className="w-10 h-10 text-purple-500" />
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Utilisateurs</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalUsers}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Building2 className="w-10 h-10 text-orange-500" />
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Partenaires</p>
                            <p className="text-2xl font-semibold text-gray-900">{stats.totalPartners}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Événements récents et populaires */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Événements récents */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Événements récents</h2>
                        <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="space-y-4">
                        {stats.recentEvents.map(event => (
                            <div key={event._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">{event.title}</p>
                                    <p className="text-sm text-gray-500">{formatDate(event.startDateTime)}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    event.status === 'published' ? 'bg-green-100 text-green-800' :
                                    event.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'
                                }`}>
                                    {event.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Événements populaires */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Événements populaires</h2>
                        <TrendingUp className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="space-y-4">
                        {stats.topEvents.map(event => (
                            <div key={event._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">{event.title}</p>
                                    <div className="flex items-center text-sm text-gray-500 mt-1">
                                        <Users className="w-4 h-4 mr-1" />
                                        <span>{event.participants} participants</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-900">{event.likes} likes</p>
                                    <p className="text-xs text-gray-500">{event.views} vues</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage; 