import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:2103';

class AuthService {
    static async getCurrentUser() {
        const token = localStorage.getItem('token');
        if (!token) return null;

        try {
            const response = await axios.get(`${API_URL}/api/users/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération du profil:', error);
            return null;
        }
    }

    static async logout() {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                await axios.post(`${API_URL}/api/auth/logout`, {}, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            } catch (error) {
                console.error('Erreur lors de la déconnexion:', error);
            }
        }
        localStorage.removeItem('token');
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static hasPermission(user, permission) {
        return user?.permissions?.includes(permission) || false;
    }
}

export default AuthService; 