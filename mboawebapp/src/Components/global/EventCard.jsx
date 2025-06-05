import React, { useState } from 'react';
import { 
    Heart,
    MessageCircle,
    Share,
    MoreHorizontal,
    MapPin,
    Eye
  } from 'lucide-react';
  import EventThumbNail from '../../assets/EventThumbNail.png';

// Composant EventCard
const EventCard = ({ event }) => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header de l'événement */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <div className="text-sm font-medium">Par {event.organizer}</div>
                <div className="text-xs text-gray-500">{event.timeAgo}</div>
              </div>
            </div>
            <button>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
  
        {/* Image et date */}
        <div className="relative">
          <img 
            src={event.image || EventThumbNail} 
            alt={event.title}
            className="w-full h-48 object-cover event-thumbnail"
          />
          <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-center shadow-sm">
            <div className="text-lg font-bold">{event.day}</div>
            <div className="text-xs text-gray-600">{event.month}</div>
          </div>
          {event.isLive && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              🔴 LIVE
            </div>
          )}
        </div>
  
        {/* Contenu */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <span>{event.places} places</span>
            <span className="mx-2">•</span>
            <MapPin className="w-4 h-4 mr-1" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
              {event.price}
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span className="text-sm text-gray-600">{event.participants} personnes participent</span>
            </div>
          </div>
  
          {/* Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <button className="flex items-center space-x-1 hover:text-gray-800">
                <Heart className="w-4 h-4" />
                <span>{event.likes} J'aime</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-800">
                <MessageCircle className="w-4 h-4" />
                <span>{event.comments} Commentaires</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-800">
                <Share className="w-4 h-4" />
                <span>{event.shares} Partages</span>
              </button>
            </div>
          </div>
  
          {/* Bouton d'action */}
          <div className="mt-4">
            {event.status === 'participate' ? (
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Je veux participer
              </button>
            ) : event.status === 'participating' ? (
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                Je participe
              </button>
            ) : (
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Je veux participer
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default EventCard;

