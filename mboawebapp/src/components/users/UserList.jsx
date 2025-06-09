import React from 'react';
import { Flag, MessageSquare, Calendar, Heart, Ban, UserCheck2 } from 'lucide-react';

const UserList = ({ users = [], onUserSelect, selectedUserId, onUserStatusUpdate }) => {
    if (!Array.isArray(users)) {
        return (
            <div className="text-center text-gray-500">
                Aucun utilisateur disponible
            </div>
        );
    }

    return (
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-20rem)]">
            {users.map((user) => {
                // Vérifier si l'utilisateur est valide
                if (!user || !user._id) return null;

                // Extraire les données avec des valeurs par défaut
                const {
                    _id,
                    firstName = '',
                    lastName = '',
                    username = '',
                    email = '',
                    avatar = 'https://via.placeholder.com/40',
                    status = 'active',
                    role = 'user',
                    reports = [],
                    events = [],
                    comments = [],
                    likes = [],
                    createdAt
                } = user;

                return (
                    <div
                        key={_id}
                        className={`p-4 rounded-lg border ${
                            selectedUserId === _id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                        } cursor-pointer transition-all duration-200`}
                        onClick={() => onUserSelect(user)}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                                <img
                                    src={avatar}
                                    alt={`${firstName} ${lastName}`}
                                    className="w-10 h-10 rounded-full"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/40';
                                    }}
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {firstName} {lastName}
                                    </h3>
                                    <p className="text-sm text-gray-500">@{username}</p>
                                    <p className="text-sm text-gray-500">{email}</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end space-y-2">
                                <div className="flex items-center space-x-2">
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

                                {reports.length > 0 && (
                                    <span className="inline-flex items-center text-red-600 text-sm">
                                        <Flag className="w-4 h-4 mr-1" />
                                        {reports.length} signalement(s)
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center text-gray-500">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{events.length} événements</span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                    <MessageSquare className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{comments.length} commentaires</span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                    <Heart className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{likes.length} likes</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                {status === 'active' ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onUserStatusUpdate(_id, 'block');
                                        }}
                                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                                        title="Bloquer l'utilisateur"
                                    >
                                        <Ban className="w-5 h-5" />
                                    </button>
                                ) : status === 'blocked' && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onUserStatusUpdate(_id, 'unblock');
                                        }}
                                        className="p-1 text-green-600 hover:bg-green-50 rounded"
                                        title="Débloquer l'utilisateur"
                                    >
                                        <UserCheck2 className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}

            {users.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                    Aucun utilisateur trouvé
                </div>
            )}
        </div>
    );
};

export default UserList; 