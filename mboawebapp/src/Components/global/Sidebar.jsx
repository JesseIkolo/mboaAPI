import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
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
} from 'lucide-react';

// Composant Sidebar
const Sidebar = ({ activeItem, setActiveItem }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                setError(null);
                const userData = await AuthService.getCurrentUser();
                if (!userData) {
                    throw new Error('Utilisateur non authentifié');
                }
                setCurrentUser(userData);
            } catch (err) {
                console.error('Erreur lors de la récupération de l\'utilisateur:', err);
                setError(err.message);
                // Rediriger vers la page de connexion si l'erreur est liée à l'authentification
                if (err.message.includes('non authentifié') || err.message.includes('Token')) {
                    navigate('/login');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await AuthService.logout();
            navigate('/login');
        } catch (err) {
            console.error('Erreur lors de la déconnexion:', err);
            // Rediriger quand même vers la page de connexion en cas d'erreur
            navigate('/login');
        }
    };

    const menuItems = [
        { 
            id: 'accueil', 
            label: 'Accueil', 
            icon: Home, 
            permission: null 
        },
        { 
            id: 'evenements', 
            label: 'Évènements', 
            icon: Calendar, 
            permission: 'manage_events' 
        },
        { 
            id: 'transactions', 
            label: 'Transactions', 
            icon: CreditCard, 
            permission: 'manage_transactions' 
        },
        { 
            id: 'partenaires', 
            label: 'Partenaires', 
            icon: Users, 
            permission: 'manage_partners' 
        },
        { 
            id: 'publicites', 
            label: 'Publicités', 
            icon: Megaphone, 
            permission: 'manage_ads' 
        },
        { 
            id: 'messagerie', 
            label: 'Messagerie', 
            icon: MessageSquare, 
            permission: 'manage_chats' 
        },
        { 
            id: 'utilisateurs', 
            label: 'Utilisateurs', 
            icon: Users, 
            permission: 'manage_users' 
        },
        { 
            id: 'statistiques', 
            label: 'Statistiques', 
            icon: BarChart3, 
            permission: null 
        },
    ];

    const bottomItems = [
        { 
            id: 'administration', 
            label: 'Administration', 
            icon: Settings,
            permission: 'validate_admins'
        },
        { 
            id: 'roles', 
            label: 'Rôles', 
            icon: UserCog,
            permission: 'validate_admins'
        },
        { 
            id: 'signalements', 
            label: 'Signalements', 
            icon: FileText,
            permission: 'manage_users'
        },
        { 
            id: 'english', 
            label: 'English', 
            icon: Globe,
            permission: null
        },
    ];

    const filterItemsByPermission = (items) => {
        if (!currentUser) return items.filter(item => !item.permission);
        return items.filter(item => 
            !item.permission || AuthService.hasPermission(currentUser, item.permission)
        );
    };

    if (loading) {
        return (
            <div className="w-64 bg-white h-screen border-r border-gray-200 flex items-center justify-center">
                <div className="text-gray-500">Chargement...</div>
            </div>
        );
    }

    if (error && !currentUser) {
        return (
            <div className="w-64 bg-white h-screen border-r border-gray-200 flex items-center justify-center">
                <div className="text-red-500 text-center px-4">{error}</div>
            </div>
        );
    }

    return (
        <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                    <div className="text-blue-600 text-xl font-bold mr-2">MBOA</div>
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                <div className="w-1 h-1 bg-red-500 rounded-full ml-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-blue-600 text-xl font-bold ml-2">EVENTS</div>
                </div>
            </div>

            {/* Menu principal */}
            <div className="flex-1 py-4">
                <nav className="space-y-1 px-3">
                    {filterItemsByPermission(menuItems).map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                    isActive 
                                        ? 'bg-blue-600 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <Icon className="w-5 h-5 mr-3" />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Menu du bas */}
            <div className="border-t border-gray-200 py-4">
                <nav className="space-y-1 px-3">
                    {filterItemsByPermission(bottomItems).map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <Icon className="w-5 h-5 mr-3" />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
                
                <div className="mt-4 px-3">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;