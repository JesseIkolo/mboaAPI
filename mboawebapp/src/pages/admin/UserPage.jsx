import React, { useState, useEffect } from 'react';
import { Search, Filter, Users, Flag, MessageSquare, Calendar, Heart, Ban, UserCheck2 } from 'lucide-react';
import { config } from '../../config/env';
import UserList from '../../components/users/UserList';
import UserDetails from '../../components/users/UserDetails';

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        status: 'all',
        role: 'all',
        reportStatus: 'all'
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token non trouvé');
            }

            const response = await fetch(`${config.API_URL}/api/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des utilisateurs');
            }

            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
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

    const handleUserStatusUpdate = async (userId, action) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/users/${userId}/${action}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Erreur lors de ${action === 'block' ? 'du blocage' : 'du déblocage'} de l'utilisateur`);
            }

            // Rafraîchir la liste des utilisateurs
            await fetchUsers();
            
            // Si l'utilisateur modifié est celui sélectionné, mettre à jour ses détails
            if (selectedUser?._id === userId) {
                const updatedUser = users.find(u => u._id === userId);
                setSelectedUser(updatedUser);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch = 
            user.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = filters.status === 'all' || user.status === filters.status;
        const matchesRole = filters.role === 'all' || user.role === filters.role;
        const matchesReportStatus = filters.reportStatus === 'all' || 
            (filters.reportStatus === 'reported' ? user.reports?.length > 0 : user.reports?.length === 0);

        return matchesSearch && matchesStatus && matchesRole && matchesReportStatus;
    });

    return (
        <div className="h-full bg-gray-50">
            {/* En-tête de la page */}
            <div className="bg-white border-b border-gray-200 px-8 py-6">
                <h1 className="text-2xl font-semibold text-gray-900">Gestion des Utilisateurs</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Gérez et supervisez tous les utilisateurs de la plateforme
                </p>
            </div>

            {/* Contenu principal */}
            <div className="flex h-[calc(100vh-12rem)]">
                {/* Section gauche - Liste des utilisateurs */}
                <div className="w-2/3 border-r border-gray-200 bg-white p-6">
                    {/* Barre de recherche et filtres */}
                    <div className="mb-6">
                        <div className="flex gap-4 mb-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Rechercher un utilisateur..."
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
                                <option value="active">Actif</option>
                                <option value="blocked">Bloqué</option>
                                <option value="pending">En attente</option>
                            </select>

                            <select
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={filters.role}
                                onChange={(e) => handleFilterChange('role', e.target.value)}
                            >
                                <option value="all">Tous les rôles</option>
                                <option value="user">Utilisateur</option>
                                <option value="admin">Administrateur</option>
                                <option value="partner">Partenaire</option>
                            </select>

                            <select
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={filters.reportStatus}
                                onChange={(e) => handleFilterChange('reportStatus', e.target.value)}
                            >
                                <option value="all">Tous les signalements</option>
                                <option value="reported">Signalés</option>
                                <option value="not_reported">Non signalés</option>
                            </select>
                        </div>
                    </div>

                    {/* Liste des utilisateurs */}
                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-600 p-4">
                            {error}
                        </div>
                    ) : (
                        <UserList 
                            users={filteredUsers}
                            onUserSelect={handleUserSelect}
                            selectedUserId={selectedUser?._id}
                            onUserStatusUpdate={handleUserStatusUpdate}
                        />
                    )}
                </div>

                {/* Section droite - Détails de l'utilisateur */}
                <div className="w-1/3 bg-white p-6">
                    {selectedUser ? (
                        <UserDetails 
                            user={selectedUser} 
                            onUserUpdated={fetchUsers}
                            onUserStatusUpdate={handleUserStatusUpdate}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Sélectionnez un utilisateur pour voir les détails
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserPage; 