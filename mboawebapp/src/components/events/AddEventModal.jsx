import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Image as ImageIcon, Info, Tag, DollarSign } from 'lucide-react';

const AddEventModal = ({ onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        location: {
            address: '',
            city: '',
            country: '',
            coordinates: {
                latitude: '',
                longitude: ''
            }
        },
        category: '',
        tags: [],
        ticketTypes: [
            {
                name: 'Standard',
                price: 0,
                quantity: 100,
                description: ''
            }
        ],
        images: [],
        isPublic: true,
        isHighlighted: false,
        maxParticipants: 100,
        organizerId: '',
        status: 'draft'
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newTag, setNewTag] = useState('');
    const [previewImages, setPreviewImages] = useState([]);

    const categories = [
        'Concert',
        'Festival',
        'Conférence',
        'Sport',
        'Art & Culture',
        'Gastronomie',
        'Business',
        'Formation',
        'Autre'
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newPreviewImages = [];

        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newPreviewImages.push(reader.result);
                setPreviewImages([...newPreviewImages]);
            };
            reader.readAsDataURL(file);
        });

        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...files]
        }));
    };

    const handleTagAdd = (e) => {
        e.preventDefault();
        if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, newTag.trim()]
            }));
            setNewTag('');
        }
    };

    const handleTagRemove = (tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleTicketTypeChange = (index, field, value) => {
        setFormData(prev => ({
            ...prev,
            ticketTypes: prev.ticketTypes.map((ticket, i) => 
                i === index ? { ...ticket, [field]: value } : ticket
            )
        }));
    };

    const addTicketType = () => {
        setFormData(prev => ({
            ...prev,
            ticketTypes: [
                ...prev.ticketTypes,
                {
                    name: '',
                    price: 0,
                    quantity: 0,
                    description: ''
                }
            ]
        }));
    };

    const removeTicketType = (index) => {
        setFormData(prev => ({
            ...prev,
            ticketTypes: prev.ticketTypes.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Formatage des données
            const formattedData = {
                ...formData,
                startDateTime: `${formData.startDate}T${formData.startTime}`,
                endDateTime: `${formData.endDate}T${formData.endTime}`,
            };

            // Création d'un FormData pour l'upload des images
            const formDataToSend = new FormData();
            formData.images.forEach((image, index) => {
                formDataToSend.append(`images`, image);
            });
            formDataToSend.append('data', JSON.stringify(formattedData));

            await onAdd(formDataToSend);
            onClose();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Créer un nouvel événement
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-8">
                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-md">
                            {error}
                        </div>
                    )}

                    {/* Informations de base */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            <Info className="w-5 h-5 mr-2" />
                            Informations de base
                        </h3>
                        
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Titre de l'événement *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    rows="4"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Date et heure */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            <Calendar className="w-5 h-5 mr-2" />
                            Date et heure
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Début</label>
                                <div className="mt-1 grid grid-cols-2 gap-2">
                                    <input
                                        type="date"
                                        name="startDate"
                                        required
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <input
                                        type="time"
                                        name="startTime"
                                        required
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Fin</label>
                                <div className="mt-1 grid grid-cols-2 gap-2">
                                    <input
                                        type="date"
                                        name="endDate"
                                        required
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <input
                                        type="time"
                                        name="endTime"
                                        required
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Localisation */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            <MapPin className="w-5 h-5 mr-2" />
                            Localisation
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="location.address" className="block text-sm font-medium text-gray-700">
                                    Adresse *
                                </label>
                                <input
                                    type="text"
                                    id="location.address"
                                    name="location.address"
                                    required
                                    value={formData.location.address}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="location.city" className="block text-sm font-medium text-gray-700">
                                    Ville *
                                </label>
                                <input
                                    type="text"
                                    id="location.city"
                                    name="location.city"
                                    required
                                    value={formData.location.city}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Catégorie et tags */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            <Tag className="w-5 h-5 mr-2" />
                            Catégorie et tags
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                    Catégorie *
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Sélectionnez une catégorie</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Tags
                                </label>
                                <div className="mt-1 flex flex-wrap gap-2">
                                    {formData.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                        >
                                            {tag}
                                            <button
                                                type="button"
                                                onClick={() => handleTagRemove(tag)}
                                                className="ml-1 text-blue-600 hover:text-blue-800"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            value={newTag}
                                            onChange={(e) => setNewTag(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleTagAdd(e)}
                                            placeholder="Ajouter un tag"
                                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Billets */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            <DollarSign className="w-5 h-5 mr-2" />
                            Types de billets
                        </h3>
                        
                        <div className="space-y-4">
                            {formData.ticketTypes.map((ticket, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-sm font-medium text-gray-900">
                                            Type de billet #{index + 1}
                                        </h4>
                                        {index > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => removeTicketType(index)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                Supprimer
                                            </button>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Nom
                                            </label>
                                            <input
                                                type="text"
                                                value={ticket.name}
                                                onChange={(e) => handleTicketTypeChange(index, 'name', e.target.value)}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Prix
                                            </label>
                                            <input
                                                type="number"
                                                min="0"
                                                value={ticket.price}
                                                onChange={(e) => handleTicketTypeChange(index, 'price', Number(e.target.value))}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Quantité disponible
                                            </label>
                                            <input
                                                type="number"
                                                min="1"
                                                value={ticket.quantity}
                                                onChange={(e) => handleTicketTypeChange(index, 'quantity', Number(e.target.value))}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Description
                                            </label>
                                            <input
                                                type="text"
                                                value={ticket.description}
                                                onChange={(e) => handleTicketTypeChange(index, 'description', e.target.value)}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={addTicketType}
                                className="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                + Ajouter un type de billet
                            </button>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            <ImageIcon className="w-5 h-5 mr-2" />
                            Images
                        </h3>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Images de l'événement
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="images" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                            <span>Télécharger des images</span>
                                            <input
                                                id="images"
                                                name="images"
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="sr-only"
                                            />
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF jusqu'à 10MB
                                    </p>
                                </div>
                            </div>

                            {previewImages.length > 0 && (
                                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                                    {previewImages.map((preview, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={preview}
                                                alt={`Preview ${index + 1}`}
                                                className="h-24 w-full object-cover rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Options supplémentaires */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">
                            Options supplémentaires
                        </h3>
                        
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="isPublic"
                                    name="isPublic"
                                    checked={formData.isPublic}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-900">
                                    Événement public
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="isHighlighted"
                                    name="isHighlighted"
                                    checked={formData.isHighlighted}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="isHighlighted" className="ml-2 block text-sm text-gray-900">
                                    Mettre en avant
                                </label>
                            </div>

                            <div>
                                <label htmlFor="maxParticipants" className="block text-sm font-medium text-gray-700">
                                    Nombre maximum de participants
                                </label>
                                <input
                                    type="number"
                                    id="maxParticipants"
                                    name="maxParticipants"
                                    min="1"
                                    value={formData.maxParticipants}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex justify-end space-x-3 pt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                                loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            {loading ? 'Création en cours...' : 'Créer l\'événement'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEventModal; 