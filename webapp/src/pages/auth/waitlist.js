import React, { useState } from 'react';
import axios from 'axios';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: ''
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 2) return { label: 'Faible', color: 'text-red-600' };
    if (score === 3 || score === 4) return { label: 'Moyen', color: 'text-yellow-600' };
    return { label: 'Fort', color: 'text-green-600' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setErrors([]);

    if (formData.password !== formData.passwordConfirm) {
      setErrors(["Les mots de passe ne correspondent pas."]);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName
      });
      setMessage(res.data.message);
      setFormData({
        username: '', email: '', phone: '', password: '', passwordConfirm: '', firstName: '', lastName: ''
      });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Erreur lors de l’inscription');
      setErrors(err.response?.data?.reasons || []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Créer un compte</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="username" placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input type="text" name="firstName" placeholder="Prénom" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input type="text" name="lastName" placeholder="Nom" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input type="email" name="email" placeholder="Adresse email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input type="tel" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        {formData.password && (
          <p className={`text-sm ${passwordStrength.color}`}>Force du mot de passe : {passwordStrength.label}</p>
        )}
        <input type="password" name="passwordConfirm" placeholder="Confirmer le mot de passe" value={formData.passwordConfirm} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" disabled={loading}>
          {loading ? 'Création en cours...' : 'Créer le compte'}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-blue-600">{message}</p>}
      {errors.length > 0 && (
        <ul className="mt-2 text-sm text-red-600 list-disc list-inside">
          {errors.map((err, index) => <li key={index}>{err}</li>)}
        </ul>
      )}
    </div>
  );
}
