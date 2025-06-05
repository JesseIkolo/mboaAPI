import React, { useState } from 'react';
import { 
  Home, 
  Calendar, 
  CreditCard, 
  Users, 
  Megaphone, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  UserCog, 
  FileText,
  Globe,
  LogOut,
  ChevronRight,
  Heart,
  MessageCircle,
  Share,
  MoreHorizontal,
  MapPin,
  Eye
} from 'lucide-react';

import Sidebar from '../../Components/global/Sidebar';
import Header from '../../Components/global/Header';
import StatCard from '../../Components/global/StatCard';
import ModuleCard from '../../Components/global/ModuleCard';
import EventCard from '../../Components/global/EventCard';


// Composant principal Dashboard
const HomePage = () => {
  const [activeItem, setActiveItem] = useState('accueil');

  const stats = [
    { title: 'Utilisateur de la waitinglist', value: '10' },
    { title: 'Évènements', value: '10' },
    { title: 'Partenaires', value: '10' },
    { title: 'Montant généré en mars', value: '10,5M' },
    { title: 'Total d\'utilisateurs Premium', value: '25k' },
    { title: 'Total d\'utilisateurs Freemium', value: '25,5M' },
  ];

  const modules = [
    { title: 'Statistiques', icon: BarChart3, bgColor: 'bg-green-100', textColor: 'text-green-700' },
    { title: 'Partenaires', icon: Users, bgColor: 'bg-purple-100', textColor: 'text-purple-700' },
    { title: 'Transactions', icon: CreditCard, bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
    { title: 'Évènements', icon: Calendar, bgColor: 'bg-gray-100', textColor: 'text-gray-700' },
    { title: 'Publicités', icon: Megaphone, bgColor: 'bg-red-100', textColor: 'text-red-700' },
    { title: 'Messagerie', icon: MessageSquare, bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
    { title: 'Utilisateurs', icon: Users, bgColor: 'bg-yellow-100', textColor: 'text-yellow-700' },
  ];

  const events = [
    {
      id: 1,
      organizer: 'Eric Fotso',
      timeAgo: 'Il y a 3min',
      day: '10',
      month: 'Juin',
      title: 'Ko-C, nouvelle tournée',
      places: '250 places',
      location: 'Au PaGGy de Yaoundé',
      price: '25 000 XAF',
      participants: '320',
      likes: '223',
      comments: '248',
      shares: '45M',
      status: 'participate',
      isLive: false,
      image: '/api/placeholder/400/200'
    },
    {
      id: 2,
      organizer: 'Eric Fotso',
      timeAgo: 'Il y a 3min',
      day: '10',
      month: 'Juin',
      title: 'Elections du président',
      places: '250 places',
      location: 'Au PaGGy de Yaoundé',
      price: '25 000 XAF',
      participants: '320',
      likes: '223',
      comments: '248',
      shares: '45M',
      status: 'participate',
      isLive: true,
      image: '/api/placeholder/400/200'
    },
    {
      id: 3,
      organizer: 'Eric Fotso',
      timeAgo: 'Il y a 3min',
      day: '10',
      month: 'Juin',
      title: 'Concert de Blanche au Paposy',
      places: '250 places',
      location: 'Au PaGGy de Yaoundé',
      price: '25 000 XAF',
      participants: '320',
      likes: '223',
      comments: '248',
      shares: '45M',
      status: 'participating',
      isLive: false,
      image: '/api/placeholder/400/200'
    },
    {
      id: 4,
      organizer: 'Eric Fotso',
      timeAgo: 'Il y a 3min',
      day: '10',
      month: 'Juin',
      title: 'Elections du président',
      places: '250 places',
      location: 'Au PaGGy de Yaoundé',
      price: '25 000 XAF',
      participants: '320',
      likes: '223',
      comments: '248',
      shares: '45M',
      status: 'participate',
      isLive: false,
      image: '/api/placeholder/400/200'
    },
    {
      id: 5,
      organizer: 'Eric Fotso',
      timeAgo: 'Il y a 3min',
      day: '26',
      month: 'Mars',
      title: 'Concert de Tenor, le turbo d\'Afrique',
      places: '250 places',
      location: 'Au Stade de Bépanda',
      price: '25 000 XAF',
      participants: '320',
      likes: '223',
      comments: '248',
      shares: '45M',
      status: 'participate',
      isLive: true,
      image: '/api/placeholder/400/200'
    },
    {
      id: 6,
      organizer: 'Eric Fotso',
      timeAgo: 'Il y a 3min',
      day: '05',
      month: 'Mai',
      title: 'Concert de petit Pays, le turbo d\'Afrique',
      places: '250 places',
      location: 'Au PaGGy de Yaoundé',
      price: '25 000 XAF',
      participants: '320',
      likes: '223',
      comments: '248',
      shares: '45M',
      status: 'participate',
      isLive: true,
      image: '/api/placeholder/400/200'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          {/* Section Welcome */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">
              Welcome, <span className="text-yellow-300">Stephane</span>
            </h1>
            <p className="text-blue-100">Are you ready to connect with other people?</p>
          </div>

          <div className="p-8">
            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatCard key={index} title={stat.title} value={stat.value} />
              ))}
            </div>

            {/* Modules d'accès */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Quel module souhaitez-vous accéder ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {modules.map((module, index) => (
                  <ModuleCard
                    key={index}
                    title={module.title}
                    icon={module.icon}
                    bgColor={module.bgColor}
                    textColor={module.textColor}
                    onClick={() => setActiveItem(module.title.toLowerCase())}
                  />
                ))}
              </div>
            </div>

            {/* Événements récents */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Événements récents
                </h2>
                <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium">
                  Voir Tout
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
            Copyright @ Mboa Events Admin 2024. All right Reserved.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default HomePage;