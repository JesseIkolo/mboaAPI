const User = require('../models/user.model');
const Event = require('../models/event.model');
const Partner = require('../models/partner.model');
const Transaction = require('../models/transaction.model');
const Waitlist = require('../models/waitlist.model');

const getDashboardStats = async (req, res) => {
    try {
        // Récupérer le nombre d'utilisateurs en waitlist
        const waitlistCount = await Waitlist.countDocuments();
        console.log('------> waitlistCount', waitlistCount);

        // Récupérer le nombre total d'événements
        const eventsCount = await Event.countDocuments();
        console.log('------> eventsCount', eventsCount);
        // Récupérer le nombre de partenaires
        const partnersCount = await Partner.countDocuments();
        console.log('------> partnersCount', partnersCount);
        // Calculer le montant généré pour le mois en cours
        const currentDate = new Date();
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        const monthlyRevenue = await Transaction.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: firstDayOfMonth,
                        $lte: lastDayOfMonth
                    },
                    status: 'completed'
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: '$amount' }
                }
            }
        ]);

        // Récupérer le nombre d'utilisateurs Premium et Freemium
        const premiumUsersCount = await User.countDocuments({ subscription: 'premium' });
        const freemiumUsersCount = await User.countDocuments({ subscription: 'freemium' });

        // Formater les nombres pour l'affichage
        const formatNumber = (num) => {
            if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
            if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
            return num.toString();
        };

        res.json({
            waitlist: formatNumber(waitlistCount),
            events: formatNumber(eventsCount),
            partners: formatNumber(partnersCount),
            monthlyRevenue: formatNumber(monthlyRevenue[0]?.total || 0),
            premiumUsers: formatNumber(premiumUsersCount),
            freemiumUsers: formatNumber(freemiumUsersCount)
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des statistiques:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des statistiques' });
    }
};

module.exports = {
    getDashboardStats
}; 