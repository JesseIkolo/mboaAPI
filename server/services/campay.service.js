const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

class CampayService {
    constructor() {
        this.baseURL = process.env.CAMPAY_API_URL || 'https://demo.campay.net/api';
        this.username = process.env.CAMPAY_USERNAME;
        this.password = process.env.CAMPAY_PASSWORD;
        this.token = null;
        this.tokenExpiry = null;
    }

    async getToken() {
        try {
            // Vérifier si le token existe et est encore valide
            if (this.token && this.tokenExpiry && this.tokenExpiry > Date.now()) {
                return this.token;
            }

            const response = await axios.post(`${this.baseURL}/token/`, {
                username: this.username,
                password: this.password
            });

            this.token = response.data.token;
            // Token valide pendant 24h
            this.tokenExpiry = Date.now() + 23 * 60 * 60 * 1000;

            return this.token;
        } catch (error) {
            console.error('Erreur lors de l\'obtention du token Campay:', error);
            throw new Error('Impossible d\'obtenir le token d\'authentification Campay');
        }
    }

    async initiatePayment(amount, phoneNumber, operator, externalReference) {
        try {
            const token = await this.getToken();
            
            const response = await axios.post(
                `${this.baseURL}/collect/`,
                {
                    amount: amount,
                    currency: "XAF",
                    from: phoneNumber,
                    description: "Paiement abonnement Mboa Events",
                    external_reference: externalReference,
                    operator: operator // 'mtn' ou 'orange'
                },
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                }
            );

            return response.data;
        } catch (error) {
            console.error('Erreur lors de l\'initiation du paiement:', error);
            throw new Error('Impossible d\'initier le paiement');
        }
    }

    async checkTransactionStatus(reference) {
        try {
            const token = await this.getToken();
            
            const response = await axios.get(
                `${this.baseURL}/transaction/${reference}/`,
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                }
            );

            return response.data;
        } catch (error) {
            console.error('Erreur lors de la vérification du statut:', error);
            throw new Error('Impossible de vérifier le statut de la transaction');
        }
    }

    async getTransactionsList(page = 1, limit = 10) {
        try {
            const token = await this.getToken();
            
            const response = await axios.get(
                `${this.baseURL}/transactions/?page=${page}&limit=${limit}`,
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                }
            );

            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des transactions:', error);
            throw new Error('Impossible de récupérer la liste des transactions');
        }
    }

    async withdrawFunds(amount, phoneNumber, operator) {
        try {
            const token = await this.getToken();
            
            const response = await axios.post(
                `${this.baseURL}/withdraw/`,
                {
                    amount: amount,
                    to: phoneNumber,
                    operator: operator
                },
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                }
            );

            return response.data;
        } catch (error) {
            console.error('Erreur lors du retrait:', error);
            throw new Error('Impossible d\'effectuer le retrait');
        }
    }
}

module.exports = new CampayService(); 