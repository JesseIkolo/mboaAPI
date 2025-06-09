import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { config } from '../../config/env';

const AdministratorList = ({ onSelectAdmin, selectedAdmin }) => {
    const [admins, setAdmins] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token non trouvé');
            }

            // Récupérer tous les administrateurs
            const response = await fetch(`${config.API_URL}/api/users?role=admin`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des administrateurs');
            }

            const data = await response.json();
            setAdmins(data);
        } catch (error) {
            console.error('Error fetching administrators:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const filteredAdmins = admins.filter(admin => {
        const searchTerm = searchQuery.toLowerCase();
        return (
            admin.firstName?.toLowerCase().includes(searchTerm) ||
            admin.lastName?.toLowerCase().includes(searchTerm) ||
            admin.email?.toLowerCase().includes(searchTerm) ||
            admin.username?.toLowerCase().includes(searchTerm)
        );
    });

    const getStatusColor = (admin) => {
        if (admin.isAdminValidated) {
            return 'bg-green-100 text-green-800';
        } else if (admin.isBlocked) {
            return 'bg-red-100 text-red-800';
        } else {
            return 'bg-yellow-100 text-yellow-800';
        }
    };

    const getStatusText = (admin) => {
        if (admin.isAdminValidated) {
            return 'VALIDÉ';
        } else if (admin.isBlocked) {
            return 'BLOQUÉ';
        } else {
            return 'EN ATTENTE';
        }
    };

    if (error) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Rechercher un administrateur..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

            {/* Administrators List */}
            <div className="flex-1 overflow-y-auto">
                {loading ? (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">Chargement des administrateurs...</p>
                    </div>
                ) : filteredAdmins.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">Aucun administrateur trouvé</p>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-200">
                        {filteredAdmins.map((admin) => (
                            <div
                                key={admin._id}
                                onClick={() => onSelectAdmin(admin)}
                                className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer ${
                                    selectedAdmin?._id === admin._id ? 'bg-blue-50' : ''
                                }`}
                            >
                                <div className="flex-shrink-0">
                                    {admin.avatar ? (
                                        <img
                                            src={admin.avatar}
                                            alt={`${admin.firstName} ${admin.lastName}`}
                                            className="h-10 w-10 rounded-full"
                                        />
                                    ) : (
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500 font-medium">
                                                {admin.firstName?.[0]}
                                                {admin.lastName?.[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="font-medium text-gray-900">
                                        {admin.firstName} {admin.lastName}
                                    </div>
                                    <div className="text-sm text-gray-500">{admin.email}</div>
                                    <div className="text-xs text-gray-400 mt-1">
                                        @{admin.username} • {admin.role === 'superadmin' ? 'Super Admin' : 'Admin'}
                                    </div>
                                </div>
                                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(admin)}`}>
                                    {getStatusText(admin)}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdministratorList; 