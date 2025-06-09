import React from 'react';
import { Building2, MessageSquare, Calendar, Heart, Ban, UserCheck2, CheckCircle2 } from 'lucide-react';

const PartnerList = ({ partners = [], onPartnerSelect, selectedPartnerId, onPartnerStatusUpdate }) => {
    if (!Array.isArray(partners)) {
        return (
            <div className="text-center text-gray-500">
                Aucun partenaire disponible
            </div>
        );
    }

    return (
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-20rem)]">
            {partners.map((partner) => {
                if (!partner || !partner._id) return null;

                const {
                    _id,
                    name = '',
                    type = 'business',
                    email = '',
                    logo = 'https://via.placeholder.com/40',
                    status = 'active',
                    isVerified = false,
                    description = '',
                    events = [],
                    comments = [],
                    likes = [],
                    authorizedUsers = []
                } = partner;

                return (
                    <div
                        key={_id}
                        className={`p-4 rounded-lg border ${
                            selectedPartnerId === _id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                        } cursor-pointer transition-all duration-200`}
                        onClick={() => onPartnerSelect(partner)}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                                <img
                                    src={logo}
                                    alt={name}
                                    className="w-12 h-12 rounded-lg object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/40';
                                    }}
                                />
                                <div>
                                    <div className="flex items-center">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {name}
                                        </h3>
                                        {isVerified && (
                                            <CheckCircle2 className="w-5 h-5 ml-2 text-blue-500" />
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500">{email}</p>
                                    <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                                        {description}
                                    </p>
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
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                        {type === 'business' ? 'Entreprise' :
                                         type === 'association' ? 'Association' : 'Individuel'}
                                    </span>
                                </div>
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
                                <div className="flex items-center text-gray-500">
                                    <Building2 className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{authorizedUsers.length} utilisateurs</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                {status === 'active' ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onPartnerStatusUpdate(_id, 'block');
                                        }}
                                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                                        title="Bloquer le partenaire"
                                    >
                                        <Ban className="w-5 h-5" />
                                    </button>
                                ) : status === 'blocked' && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onPartnerStatusUpdate(_id, 'unblock');
                                        }}
                                        className="p-1 text-green-600 hover:bg-green-50 rounded"
                                        title="Débloquer le partenaire"
                                    >
                                        <UserCheck2 className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}

            {partners.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                    Aucun partenaire trouvé
                </div>
            )}
        </div>
    );
};

export default PartnerList; 