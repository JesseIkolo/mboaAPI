import React, { useState, useEffect } from 'react';
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
  Eye,
  UserCheck,
  Building2,
  LayoutDashboard
} from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Sidebar from '../../components/global/Sidebar';
import Header from '../../components/global/Header';
import StatCard from '../../components/global/StatCard';
import ModuleCard from '../../components/global/ModuleCard';
import EventCard from '../../components/global/EventCard';
import DashboardStats from '../../components/admin/DashboardStats';
import AdministratorManagement from '../../components/admin/AdministratorManagement';
import AuthService from '../../services/auth.service';
import EventPage from './EventPage';
import UserPage from './UserPage';
import PartnerPage from './PartnerPage';
import DashboardPage from './DashboardPage';
import SettingsPage from './SettingsPage';

// Composant principal Dashboard
const HomePage = () => {
  const [activeItem, setActiveItem] = useState('accueil');
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token non trouvé');
        }

        const headers = {
          'Authorization': `Bearer ${token}`
        };

        // Récupérer les informations de l'utilisateur
        const userResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/users/me`, {
          headers
        });

        if (!userResponse.ok) {
          throw new Error('Erreur lors de la récupération des données utilisateur');
        }

        const userData = await userResponse.json();
        setUser(userData);

        // Vérifier les permissions pour les statistiques
        if (AuthService.hasPermission(userData, 'manage_events')) {
          const eventsResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/events`, {
            headers
          });
          
          if (!eventsResponse.ok) {
            throw new Error('Erreur lors de la récupération des événements');
          }
          
          const eventsData = await eventsResponse.json();
          setEvents(eventsData);
        }

        // Vérifier les permissions pour les statistiques
        if (AuthService.hasPermission(userData, 'manage_users')) {
          const statsResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/stats/dashboard`, {
            headers
          });
          
          if (!statsResponse.ok) {
            throw new Error('Erreur lors de la récupération des statistiques');
          }
          
          const statsData = await statsResponse.json();
          const formattedStats = [
            { title: 'Utilisateur de la waitinglist', value: statsData.waitlist },
            { title: 'Évènements', value: statsData.events },
            { title: 'Partenaires', value: statsData.partners },
            { title: 'Montant généré en mars', value: statsData.monthlyRevenue },
            { title: 'Total d\'utilisateurs Premium', value: statsData.premiumUsers },
            { title: 'Total d\'utilisateurs Freemium', value: statsData.freemiumUsers },
          ];
          setStats(formattedStats);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const modules = [
    { 
      title: 'Statistiques', 
      icon: BarChart3, 
      bgColor: 'bg-green-100', 
      textColor: 'text-green-700',
      permission: 'manage_users'
    },
    { 
      title: 'Partenaires', 
      icon: Users, 
      bgColor: 'bg-purple-100', 
      textColor: 'text-purple-700',
      permission: 'manage_partners'
    },
    { 
      title: 'Transactions', 
      icon: CreditCard, 
      bgColor: 'bg-blue-100', 
      textColor: 'text-blue-700',
      permission: 'manage_transactions'
    },
    { 
      title: 'Évènements', 
      icon: Calendar, 
      bgColor: 'bg-gray-100', 
      textColor: 'text-gray-700',
      permission: 'manage_events',
      key: 'evenements'
    },
    { 
      title: 'Publicités', 
      icon: Megaphone, 
      bgColor: 'bg-red-100', 
      textColor: 'text-red-700',
      permission: 'manage_ads'
    },
    { 
      title: 'Messagerie', 
      icon: MessageSquare, 
      bgColor: 'bg-blue-100', 
      textColor: 'text-blue-700',
      permission: 'manage_chats'
    },
    { 
      title: 'Utilisateurs', 
      icon: Users, 
      bgColor: 'bg-yellow-100', 
      textColor: 'text-yellow-700',
      permission: 'manage_users'
    },
    { 
      title: 'Waiting List', 
      icon: UserCheck, 
      bgColor: 'bg-yellow-100', 
      textColor: 'text-yellow-700',
      permission: 'manage_users'
    }
  ];

  // Filtrer les modules en fonction des permissions de l'utilisateur
  const filteredModules = modules.filter(module => 
    !module.permission || (user && AuthService.hasPermission(user, module.permission))
  );

  const handleModuleClick = (module) => {
    const navigationKey = module.key || module.title.toLowerCase();
    setActiveItem(navigationKey);
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'administration':
        return <AdministratorManagement />;
      case 'evenements':
        return <EventPage />;
      case 'utilisateurs':
        return <UserPage />;
      case 'partenaires':
        return <PartnerPage />;
      default:
        return (
          <>
            {/* Section Welcome */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
              <h1 className="text-3xl font-bold mb-2">
                Welcome, <span className="text-yellow-300">{user ? user.firstName || 'Admin' : 'Admin'}</span>
              </h1>
              <p className="text-blue-100">Are you ready to connect with other people?</p>
            </div>

            <div className="p-8">
              {/* Statistiques */}
              {loading ? ( 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                  <div className="col-span-5 text-center">Chargement des statistiques...</div>
                </div>
              ) : (
                user && AuthService.hasPermission(user, 'manage_users') && <DashboardStats stats={stats} />
              )}

              {/* Modules d'accès */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Quel module souhaitez-vous accéder ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredModules.map((module, index) => (
                    <ModuleCard
                      key={index}
                      title={module.title}
                      icon={module.icon}
                      bgColor={module.bgColor}
                      textColor={module.textColor}
                      onClick={() => handleModuleClick(module)}
                    />
                  ))}
                </div>
              </div>

              {/* Événements récents */}
              {user && AuthService.hasPermission(user, 'manage_events') && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Événements récents
                    </h2>
                    <button 
                      className="flex items-center text-orange-600 hover:text-orange-700 font-medium"
                      onClick={() => handleModuleClick(modules.find(m => m.key === 'evenements'))}
                    >
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
              )}
            </div>
          </>
        );
    }
  };

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Erreur</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const navigation = [
    {
      name: 'Tableau de bord',
      href: '/admin',
      icon: LayoutDashboard,
      exact: true
    },
    {
      name: 'Événements',
      href: '/admin/events',
      icon: Calendar
    },
    {
      name: 'Utilisateurs',
      href: '/admin/users',
      icon: Users
    },
    {
      name: 'Partenaires',
      href: '/admin/partners',
      icon: Building2
    },
    {
      name: 'Paramètres',
      href: '/admin/settings',
      icon: Settings
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={renderContent()} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/partners" element={<PartnerPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
          Copyright @ Mboa Events Admin 2024. All right Reserved.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;