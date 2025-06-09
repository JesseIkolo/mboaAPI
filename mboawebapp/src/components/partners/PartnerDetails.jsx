import React, { useState } from 'react';
import { 
    Building2,
    Mail, 
    Phone, 
    MapPin,
    Globe,
    Calendar,
    MessageSquare,
    Heart,
    Ban,
    UserCheck2,
    Users,
    Clock,
    CheckCircle2,
    Plus,
    Trash2
} from 'lucide-react';

const PartnerDetails = ({ partner, onPartnerStatusUpdate, onPartnerUpdated }) => {
    const [activeTab, setActiveTab] = useState('info');
    const [showAddUserModal, setShowAddUserModal] = useState(false);

    if (!partner) {
        return (
            <div className="flex items-center justify-center h-full text-gray-500">
                Sélectionnez un partenaire pour voir les détails
            </div>
        );
    }

    const {
        _id,
        name = '',
        type = 'business',
        email = '',
        phone = '',
        website = '',
        logo = 'https://via.placeholder.com/100',
        status = 'active',
        isVerified = false,
        description = '',
        location = {},
        events = [],
        comments = [],
        likes = [],
        authorizedUsers = [],
        createdAt,
        lastActivity,
        recentActivity = []
    } = partner;

    const formatDate = (date) => {
        if (!date) return 'Non disponible';
        return new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleRemoveUser = async (userId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token non trouvé');

            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/partners/${_id}/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la suppression de l\'utilisateur');
            }

            onPartnerUpdated();
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'info':
                return (
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Informations de contact</h4>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-600">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span>{email}</span>
                                </div>
                                {phone && (
                                    <div className="flex items-center text-gray-600">
                                        <Phone className="w-4 h-4 mr-2" />
                                        <span>{phone}</span>
                                    </div>
                                )}
                                {location.address && (
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span>{location.address}</span>
                                    </div>
                                )}
                                {website && (
                                    <div className="flex items-center text-gray-600">
                                        <Globe className="w-4 h-4 mr-2" />
                                        <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            {website}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
                            <p className="text-gray-600">{description}</p>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Statistiques</h4>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div className="text-2xl font-semibold text-gray-900">{events.length}</div>
                                    <div className="text-sm text-gray-500">Événements</div>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div className="text-2xl font-semibold text-gray-900">{comments.length}</div>
                                    <div className="text-sm text-gray-500">Commentaires</div>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div className="text-2xl font-semibold text-gray-900">{likes.length}</div>
                                    <div className="text-sm text-gray-500">Likes</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Dates importantes</h4>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-600">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <div>
                                        <div className="text-sm font-medium">Inscrit le</div>
                                        <div className="text-sm">{formatDate(createdAt)}</div>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <div>
                                        <div className="text-sm font-medium">Dernière activité</div>
                                        <div className="text-sm">{formatDate(lastActivity)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'users':
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h4 className="text-sm font-medium text-gray-500">Utilisateurs autorisés</h4>
                            <button
                                onClick={() => setShowAddUserModal(true)}
                                className="inline-flex items-center px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
                            >
                                <Plus className="w-4 h-4 mr-1" />
                                Ajouter
                            </button>
                        </div>

                        {authorizedUsers.length > 0 ? (
                            <div className="space-y-3">
                                {authorizedUsers.map((user) => (
                                    <div key={user._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src={user.avatar || 'https://via.placeholder.com/32'}
                                                alt={user.name}
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {user.firstName} {user.lastName}
                                                </p>
                                                <p className="text-xs text-gray-500">{user.email}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveUser(user._id)}
                                            className="p-1 text-red-600 hover:bg-red-50 rounded"
                                            title="Retirer l'utilisateur"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 py-4">
                                Aucun utilisateur autorisé
                            </div>
                        )}
                    </div>
                );

            case 'activity':
                return (
                    <div className="space-y-4">
                        {recentActivity.length > 0 ? (
                            recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0">
                                        {activity.type === 'comment' && <MessageSquare className="w-5 h-5 text-blue-500" />}
                                        {activity.type === 'like' && <Heart className="w-5 h-5 text-red-500" />}
                                        {activity.type === 'event' && <Calendar className="w-5 h-5 text-green-500" />}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-900">{activity.description}</p>
                                        <p className="text-xs text-gray-500">{formatDate(activity.date)}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 py-4">
                                Aucune activité récente
                            </div>
                        )}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="h-full flex flex-col">
            {/* En-tête avec les informations de base */}
            <div className="text-center pb-6 border-b border-gray-200">
                <div className="relative inline-block">
                    <img
                        src={logo}
                        alt={name}
                        className="w-24 h-24 rounded-lg object-cover mx-auto mb-4"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/100';
                        }}
                    />
                    <span className={`absolute bottom-4 right-0 w-4 h-4 rounded-full border-2 border-white ${
                        status === 'active' ? 'bg-green-500' :
                        status === 'blocked' ? 'bg-red-500' : 'bg-yellow-500'
                    }`} />
                </div>
                <div className="flex items-center justify-center">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {name}
                    </h2>
                    {isVerified && (
                        <CheckCircle2 className="w-5 h-5 ml-2 text-blue-500" />
                    )}
                </div>
                <div className="flex items-center justify-center space-x-2 mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : status === 'blocked'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                    }`}>
                        {status === 'active' ? 'Actif' :
                         status === 'blocked' ? 'Bloqué' : 'En attente'}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {type === 'business' ? 'Entreprise' :
                         type === 'association' ? 'Association' : 'Individuel'}
                    </span>
                </div>

                {/* Actions */}
                <div className="flex justify-center mt-4 space-x-2">
                    {status === 'active' ? (
                        <button
                            onClick={() => onPartnerStatusUpdate(_id, 'block')}
                            className="inline-flex items-center px-3 py-1.5 border border-red-300 text-red-600 rounded-md hover:bg-red-50"
                        >
                            <Ban className="w-4 h-4 mr-1" />
                            Bloquer
                        </button>
                    ) : status === 'blocked' && (
                        <button
                            onClick={() => onPartnerStatusUpdate(_id, 'unblock')}
                            className="inline-flex items-center px-3 py-1.5 border border-green-300 text-green-600 rounded-md hover:bg-green-50"
                        >
                            <UserCheck2 className="w-4 h-4 mr-1" />
                            Débloquer
                        </button>
                    )}
                </div>
            </div>

            {/* Onglets */}
            <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                    <button
                        className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${
                            activeTab === 'info'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab('info')}
                    >
                        Informations
                    </button>
                    <button
                        className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${
                            activeTab === 'users'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab('users')}
                    >
                        Utilisateurs
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                            {authorizedUsers.length}
                        </span>
                    </button>
                    <button
                        className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${
                            activeTab === 'activity'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab('activity')}
                    >
                        Activités
                    </button>
                </nav>
            </div>

            {/* Contenu de l'onglet */}
            <div className="flex-1 overflow-y-auto p-6">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default PartnerDetails; 