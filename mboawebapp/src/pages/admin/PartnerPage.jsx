import React, { useState, useEffect } from 'react';
import { Search, Filter, Users, Building2, MessageSquare, Calendar, Heart, Ban, UserCheck2, Plus } from 'lucide-react';
import { config } from '../../config/env';
import PartnerList from '../../components/partners/PartnerList';
import PartnerDetails from '../../components/partners/PartnerDetails';
import AddPartnerModal from '../../components/partners/AddPartnerModal';

const PartnerPage = () => {
    const [partners, setPartners] = useState([]);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [filters, setFilters] = useState({
        status: 'all',
        type: 'all',
        verificationStatus: 'all'
    });

    useEffect(() => {
        fetchPartners();
    }, []);

    const fetchPartners = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token non trouvé');
            }

            const response = await fetch(`${config.API_URL}/api/partners`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des partenaires');
            }

            const data = await response.json();
            setPartners(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePartnerSelect = (partner) => {
        setSelectedPartner(partner);
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

    const handlePartnerStatusUpdate = async (partnerId, action) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/partners/${partnerId}/${action}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Erreur lors de ${action === 'block' ? 'du blocage' : 'du déblocage'} du partenaire`);
            }

            await fetchPartners();
            
            if (selectedPartner?._id === partnerId) {
                const updatedPartner = partners.find(p => p._id === partnerId);
                setSelectedPartner(updatedPartner);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleAddPartner = async (partnerData) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${config.API_URL}/api/partners`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(partnerData)
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout du partenaire');
            }

            await fetchPartners();
            setShowAddModal(false);
        } catch (err) {
            setError(err.message);
        }
    };

    const filteredPartners = partners.filter(partner => {
        const matchesSearch = 
            partner.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            partner.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            partner.description?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = filters.status === 'all' || partner.status === filters.status;
        const matchesType = filters.type === 'all' || partner.type === filters.type;
        const matchesVerification = filters.verificationStatus === 'all' || 
            partner.isVerified === (filters.verificationStatus === 'verified');

        return matchesSearch && matchesStatus && matchesType && matchesVerification;
    });

    return (
        <div className="h-full bg-gray-50">
            {/* En-tête de la page */}
            <div className="bg-white border-b border-gray-200 px-8 py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Gestion des Partenaires</h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Gérez et supervisez tous les partenaires de la plateforme
                        </p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Ajouter un partenaire
                    </button>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="flex h-[calc(100vh-12rem)]">
                {/* Section gauche - Liste des partenaires */}
                <div className="w-2/3 border-r border-gray-200 bg-white p-6">
                    {/* Barre de recherche et filtres */}
                    <div className="mb-6">
                        <div className="flex gap-4 mb-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Rechercher un partenaire..."
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
                                value={filters.type}
                                onChange={(e) => handleFilterChange('type', e.target.value)}
                            >
                                <option value="all">Tous les types</option>
                                <option value="business">Entreprise</option>
                                <option value="association">Association</option>
                                <option value="individual">Individuel</option>
                            </select>

                            <select
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={filters.verificationStatus}
                                onChange={(e) => handleFilterChange('verificationStatus', e.target.value)}
                            >
                                <option value="all">Toutes les vérifications</option>
                                <option value="verified">Vérifié</option>
                                <option value="unverified">Non vérifié</option>
                            </select>
                        </div>
                    </div>

                    {/* Liste des partenaires */}
                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-600 p-4">
                            {error}
                        </div>
                    ) : (
                        <PartnerList 
                            partners={filteredPartners}
                            onPartnerSelect={handlePartnerSelect}
                            selectedPartnerId={selectedPartner?._id}
                            onPartnerStatusUpdate={handlePartnerStatusUpdate}
                        />
                    )}
                </div>

                {/* Section droite - Détails du partenaire */}
                <div className="w-1/3 bg-white p-6">
                    {selectedPartner ? (
                        <PartnerDetails 
                            partner={selectedPartner} 
                            onPartnerUpdated={fetchPartners}
                            onPartnerStatusUpdate={handlePartnerStatusUpdate}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Sélectionnez un partenaire pour voir les détails
                        </div>
                    )}
                </div>
            </div>

            {/* Modal d'ajout de partenaire */}
            {showAddModal && (
                <AddPartnerModal
                    onClose={() => setShowAddModal(false)}
                    onAdd={handleAddPartner}
                />
            )}
        </div>
    );
};

export default PartnerPage; 