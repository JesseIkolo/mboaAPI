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
  } from 'lucide-react';


// Composant Sidebar
const Sidebar = ({ activeItem, setActiveItem }) => {
    const menuItems = [
      { id: 'accueil', label: 'Accueil', icon: Home, active: true },
      { id: 'evenements', label: 'Évènements', icon: Calendar },
      { id: 'transactions', label: 'Transactions', icon: CreditCard },
      { id: 'partenaires', label: 'Partenaires', icon: Users },
      { id: 'publicites', label: 'Publicités', icon: Megaphone },
      { id: 'messagerie', label: 'Messagerie', icon: MessageSquare },
      { id: 'utilisateurs', label: 'Utilisateurs', icon: Users },
      { id: 'statistiques', label: 'Statistiques', icon: BarChart3 },
    ];
  
    const bottomItems = [
      { id: 'administration', label: 'Administration', icon: Settings },
      { id: 'roles', label: 'Rôles', icon: UserCog },
      { id: 'signalements', label: 'Signalements', icon: FileText },
      { id: 'english', label: 'English', icon: Globe },
    ];
  
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
            {menuItems.map((item) => {
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
            {bottomItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
          
          <div className="mt-4 px-3">
            <button className="flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
              <LogOut className="w-5 h-5 mr-3" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Sidebar;