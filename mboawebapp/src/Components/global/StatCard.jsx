import React, { useState } from 'react';


// Composant StatCard
const StatCard = ({ title, value, bgColor = 'bg-white' }) => {
    return (
      <div className={`${bgColor} p-6 StatCard rounded-xl shadow-sm border border-gray-200`}>
        <h3 className="text-3xl font-bold text-gray-900 ">{value}</h3>
        <p className="text-sm text-gray-600 mb-2">{title}</p>
      </div>
    );
  };

  export default StatCard;

