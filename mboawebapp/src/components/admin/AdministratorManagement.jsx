import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import AdministratorList from './AdministratorList';
import AdministratorDetails from './AdministratorDetails';

const AdministratorManagement = () => {
    const [selectedAdmin, setSelectedAdmin] = useState(null);

    return (
        <div className="h-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
                <h1 className="text-3xl font-bold mb-2">
                    Liste des administrateur en attente
                </h1>
            </div>

            <div className="flex h-[calc(100vh-12rem)]">
                {/* Left Panel - Administrator List */}
                <div className="w-2/3 border-r border-gray-200 bg-white">
                    <AdministratorList
                        onSelectAdmin={setSelectedAdmin}
                        selectedAdmin={selectedAdmin}
                    />
                </div>

                {/* Right Panel - Administrator Details */}
                <div className="w-1/3 bg-white">
                    <div className="h-full flex flex-col">
                        <div className="p-4 border-b border-gray-200 flex items-center">
                            <button
                                onClick={() => setSelectedAdmin(null)}
                                className="text-gray-500 hover:text-gray-700 flex items-center"
                            >
                                <ChevronLeft className="w-5 h-5 mr-1" />
                                Back
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <AdministratorDetails admin={selectedAdmin} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdministratorManagement; 