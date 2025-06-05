import React, { useState } from 'react';

import UserInfo from './UserInfo';

// Composant Header
const Header = () => {
    return (
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div></div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Créer un Évènement
            </button>
            <UserInfo name="Stéphane Ndiki" email="stephanendiki@gmail.com" />
          </div>
        </div>
      </div>
    );
  };

  export default Header;