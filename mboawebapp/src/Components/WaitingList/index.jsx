import React, { useState } from 'react';
import { useNotification } from '../../contexts/NotificationContext';
import { config } from '../../config/env';

const WaitingList = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useNotification();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${config.API_URL}${config.AUTH_ENDPOINTS.WAITING_LIST}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showNotification('Merci de votre intérêt ! Vous serez notifié dès que nous serons prêts.', 'success');
        setFormData({
          name: '',
          email: '',
          phone: ''
        });
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      showNotification(error.message || 'Désolé, une erreur est survenue. Veuillez réessayer plus tard.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-indigo-700" id="waiting-list">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="py-10 px-6 bg-indigo-600 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Soyez les premiers à découvrir Mboa Events
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
              Inscrivez-vous à notre liste d'attente pour être informé du lancement et bénéficier d'avantages exclusifs.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="sr-only">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white rounded-md"
                  placeholder="Nom complet"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Numéro de téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white rounded-md"
                  placeholder="Numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Adresse email (optionnel)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white rounded-md"
                  placeholder="Adresse email (optionnel)"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white disabled:opacity-50"
                >
                  {isLoading ? 'Inscription...' : 'Je m\'inscris'}
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-indigo-100">
              Nous respectons votre vie privée. Désabonnez-vous à tout moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingList; 