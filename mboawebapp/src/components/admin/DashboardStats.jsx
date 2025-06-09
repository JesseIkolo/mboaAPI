import React, { useEffect, useState } from 'react';
import StatsService from '../../services/stats.service';
import StatCard from '../global/StatCard';

const DashboardStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const data = await StatsService.getDashboardStats();
                console.log('------> data', data);
                setStats(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
            <StatCard
                title="Waitinglist"
                value={stats?.waitlist || 0}
                bgColor="bg-blue-50"
                isLoading={loading}
                error={error}
            />
            <StatCard
                title="Utilisateurs"
                value={stats?.users || 0}
                bgColor="bg-blue-50"
                isLoading={loading}
                error={error}
            />
            <StatCard
                title="Partenaires Business"
                value={stats?.partners || 0}
                bgColor="bg-green-50"
                isLoading={loading}
                error={error}
            />
            <StatCard
                title="Revenue Mensuel"
                value={stats?.totalPartners || 0}
                bgColor="bg-purple-50"
                isLoading={loading}
                error={error}
            />
            <StatCard
                title="Utilisateurs Premium"
                value={stats?.totalPremiumUsers || 0}
                bgColor="bg-orange-50"
                isLoading={loading}
                error={error}
            />
        </div>
    );
};

export default DashboardStats; 