import axios from 'axios';
import AuthService from './auth.service';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:2103';

class StatsService {
    static async getDashboardStats() {
        const token = AuthService.getToken();
        if (!token) return null;

        try {
            const response = await axios.get(`${API_URL}/api/stats/dashboard`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            console.log('------> response.data', response.data);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des statistiques:', error);
            return null;
        }
    }

    static async getUserStats() {
        const token = AuthService.getToken();
        if (!token) return null;

        try {
            const response = await axios.get(`${API_URL}/api/stats/users`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des statistiques utilisateurs:', error);
            return null;
        }
    }
}

export default StatsService; 