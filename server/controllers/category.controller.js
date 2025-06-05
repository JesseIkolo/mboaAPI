const Category = require('../models/category.model');

// Créer une nouvelle catégorie
exports.createCategory = async (req, res) => {
    try {
        const { name, description, icon, color, subCategories } = req.body;

        const category = new Category({
            name,
            description,
            icon,
            color,
            subCategories: subCategories || []
        });

        await category.save();
        res.status(201).json(category);
    } catch (error) {
        if (error.code === 11000) { // Erreur de duplicate key
            return res.status(400).json({ message: "Une catégorie avec ce nom existe déjà" });
        }
        res.status(500).json({ message: error.message });
    }
};

// Obtenir toutes les catégories
exports.getAllCategories = async (req, res) => {
    try {
        const { status } = req.query;
        const query = status ? { status } : {};

        const categories = await Category.find(query)
            .sort({ name: 1 });

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir une catégorie par ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour une catégorie
exports.updateCategory = async (req, res) => {
    try {
        const { name, description, icon, color, status } = req.body;
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }

        category.name = name || category.name;
        category.description = description || category.description;
        category.icon = icon || category.icon;
        category.color = color || category.color;
        category.status = status || category.status;

        await category.save();
        res.status(200).json(category);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Une catégorie avec ce nom existe déjà" });
        }
        res.status(500).json({ message: error.message });
    }
};

// Supprimer une catégorie
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }

        await category.remove();
        res.status(200).json({ message: "Catégorie supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter une sous-catégorie
exports.addSubCategory = async (req, res) => {
    try {
        const { name, description, icon } = req.body;
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }

        // Vérifier si la sous-catégorie existe déjà
        const subCategoryExists = category.subCategories.some(sub => sub.name === name);
        if (subCategoryExists) {
            return res.status(400).json({ message: "Une sous-catégorie avec ce nom existe déjà" });
        }

        category.subCategories.push({
            name,
            description,
            icon
        });

        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour une sous-catégorie
exports.updateSubCategory = async (req, res) => {
    try {
        const { name, description, icon, status } = req.body;
        const { id, subId } = req.params;

        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }

        const subCategory = category.subCategories.id(subId);
        if (!subCategory) {
            return res.status(404).json({ message: "Sous-catégorie non trouvée" });
        }

        subCategory.name = name || subCategory.name;
        subCategory.description = description || subCategory.description;
        subCategory.icon = icon || subCategory.icon;
        subCategory.status = status || subCategory.status;

        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer une sous-catégorie
exports.deleteSubCategory = async (req, res) => {
    try {
        const { id, subId } = req.params;
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }

        category.subCategories = category.subCategories.filter(
            sub => sub._id.toString() !== subId
        );

        await category.save();
        res.status(200).json({ message: "Sous-catégorie supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 