import mongoose from "mongoose";
import { body } from 'express-validator';

const houseSchema = new mongoose.Schema({
    houseType: {
        type: String,
        enum: ['Fillo', 'Dabaq', 'Jiingad', 'Baacweeyne', 'Modul', 'Hotel'],
        required: true,
        message: 'Vänligen välj en huskategori.',
    },
    city: {
        type: String,
        required: true,
        message: 'Stad är obligatoriskt.',
    },
    district: {
        type: String,
        required: true,
        message: 'Område är obligatoriskt.',
    },
    description: { type: String },
    bathrooms: {
        type: Number,
        required: true,
        message: 'Antal badrum är obligatoriskt.',
    },
    thumbnail: { type: String },
    yearBuilt: {
        type: Date,
        required: true,
        message: 'Byggår är obligatoriskt.',
    },
    squareMeters: {
        type: Number,
        required: true,
        message: 'Kvadratmeter är obligatoriskt.',
    },
    price: {
        type: Number,
        required: true,
        message: 'Pris är obligatoriskt.',
    },
    rooms: {
        type: Number,
        required: true,
        message: 'Antal rum är obligatoriskt.',
    },
    wifi: { type: Boolean,
        enum: ["Yes","No"] ,required: true, message: 'WiFi-tilgänglighet är obligatoriskt.' },
    water: { type: Boolean,
        enum: ["Yes","No"] ,required: true, message: 'Vatten-tilgänglighet är obligatoriskt.' },
    toilets: {
        type: Number,
        required: true,
        message: 'Antal toaletter är obligatoriskt.',
    },
    images: [{
        type: String,
        required: true,
        message: 'Minst en bild är obligatoriskt.',
    }],
    location: {
        latitude: Number,
        longitude: Number,
    },
    parking: { type: Boolean, enum: ["Yes","No"], required: true, message: 'Parkering är obligatoriskt.' },
    houseTransactions: {
        type: String,
        enum: ['Kiro', 'Iibin', 'Badal', 'Iibsasho'],
        required: true,
        message: 'Husstatus är obligatoriskt.',
    },
    createdAt: { type: Date, default: Date.now },
});

export const HouseModel = mongoose.model('HouseModel', houseSchema);
