import React, { useState, useEffect } from 'react';
import AuthService from '../../services/auth.service';
import UserInfo from './UserInfo';

// Composant Header
const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await AuthService.getCurrentUser();
            setUser(userData);
        };
        fetchUser();
    }, []);

    const canCreateEvent = user?.permissions?.includes('manage_events');

    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
                <div></div>
                <div className="flex items-center space-x-4">
                    {canCreateEvent && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Créer un Évènement
                        </button>
                    )}
                    {user && (
                        <UserInfo 
                            name={`${user.firstName} ${user.lastName}`} 
                            email={user.email}
                            role={user.role}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;