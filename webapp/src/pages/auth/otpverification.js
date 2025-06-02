import React, { useState } from 'react';
import axios from 'axios';

export default function OTPVerificationForm() {
  const [formData, setFormData] = useState({ email: '', phone: '', otp: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.post('http://localhost:5000/api/users/verify-otp', formData);
      setMessage(res.data.message);
      setFormData({ email: '', phone: '', otp: '' });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Erreur de vérification OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Vérification OTP</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email (ou vide si téléphone)"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone (ou vide si email)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="otp"
          placeholder="Code OTP reçu"
          value={formData.otp}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? 'Vérification...' : 'Valider le code OTP'}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-blue-600">{message}</p>}
    </div>
  );
}
