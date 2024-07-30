import LandModel from '../models/landModel.js';

// Hämta alla mark
export const getLands = async (req, res) => {
    try {
        const lands = await LandModel.find();
        res.status(200).json(lands);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch lands" });
    }
};

// Hämta en specifik mark med ID
export const getLandById = async (req, res) => {
    try {
        const land = await LandModel.findById(req.params.id);
        if (!land) {
            return res.status(404).json({ success: false, message: "LandModel not found" });
        }
        res.status(200).json(land);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch land" });
    }
};

// Skapa en ny mark
export const createLand = async (req, res) => {
    try {
        const newLand = new LandModel(req.body);
        const savedLand = await newLand.save();
        res.status(201).json(savedLand);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to create land" });
    }
};

// Uppdatera en mark med ID
export const updateLand = async (req, res) => {
    try {
        const updatedLand = await LandModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLand) {
            return res.status(404).json({ success: false, message: "LandModel not found" });
        }
        res.status(200).json(updatedLand);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to update land" });
    }
};

// Ta bort en mark med ID
export const deleteLand = async (req, res) => {
    try {
        const deletedLand = await LandModel.findByIdAndDelete(req.params.id);
        if (!deletedLand) {
            return res.status(404).json({ success: false, message: "LandModel not found" });
        }
        res.status(200).json({ success: true, message: "LandModel deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to delete land" });
    }
};
