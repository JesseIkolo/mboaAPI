import React, { useState } from 'react';
import { 
    Calendar, 
    MapPin, 
    Mail, 
    Phone, 
    Flag,
    MessageSquare,
    Heart,
    Ban,
    UserCheck2,
    Clock,
    AlertTriangle
} from 'lucide-react';

const UserDetails = ({ user, onUserStatusUpdate }) => {
    const [activeTab, setActiveTab] = useState('info');

    if (!user) {
        return (
            <div className="flex items-center justify-center h-full text-gray-500">
                Sélectionnez un utilisateur pour voir les détails
            </div>
        );
    }

    const {
        _id,
        firstName = '',
        lastName = '',
        username = '',
        email = '',
        phone = '',
        avatar = 'https://via.placeholder.com/100',
        status = 'active',
        role = 'user',
        location = {},
        reports = [],
        events = [],
        comments = [],
        likes = [],
        createdAt,
        lastLogin,
        recentActivity = []
    } = user;

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
                            </div>
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
                                        <div className="text-sm font-medium">Dernière connexion</div>
                                        <div className="text-sm">{formatDate(lastLogin)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

            case 'reports':
                return (
                    <div className="space-y-4">
                        {reports.length > 0 ? (
                            reports.map((report, index) => (
                                <div key={index} className="p-4 bg-red-50 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                        <div>
                                            <p className="text-sm font-medium text-red-800">
                                                Signalé par {report.reportedBy}
                                            </p>
                                            <p className="text-sm text-red-600 mt-1">
                                                {report.reason}
                                            </p>
                                            <p className="text-xs text-red-500 mt-2">
                                                {formatDate(report.date)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 py-4">
                                Aucun signalement
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
                        src={avatar}
                        alt={`${firstName} ${lastName}`}
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/100';
                        }}
                    />
                    <span className={`absolute bottom-4 right-0 w-4 h-4 rounded-full border-2 border-white ${
                        status === 'active' ? 'bg-green-500' :
                        status === 'blocked' ? 'bg-red-500' : 'bg-yellow-500'
                    }`} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                    {firstName} {lastName}
                </h2>
                <p className="text-sm text-gray-500">@{username}</p>
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
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {role === 'admin' ? 'Admin' :
                         role === 'partner' ? 'Partenaire' : 'Utilisateur'}
                    </span>
                </div>

                {/* Actions */}
                <div className="flex justify-center mt-4 space-x-2">
                    {status === 'active' ? (
                        <button
                            onClick={() => onUserStatusUpdate(_id, 'block')}
                            className="inline-flex items-center px-3 py-1.5 border border-red-300 text-red-600 rounded-md hover:bg-red-50"
                        >
                            <Ban className="w-4 h-4 mr-1" />
                            Bloquer
                        </button>
                    ) : status === 'blocked' && (
                        <button
                            onClick={() => onUserStatusUpdate(_id, 'unblock')}
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
                            activeTab === 'activity'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab('activity')}
                    >
                        Activités
                    </button>
                    <button
                        className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${
                            activeTab === 'reports'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab('reports')}
                    >
                        Signalements
                        {reports.length > 0 && (
                            <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-red-100 text-red-600 rounded-full">
                                {reports.length}
                            </span>
                        )}
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

export default UserDetails; 