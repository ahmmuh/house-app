import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
    houseType: {
        type: String,
        enum: ['Fillo', 'Dabaq', 'Jiingad', 'Baacweeyne', 'Modul', 'Hotel'],
        required: true,
        message: 'Vänligen välj en huskategori.',
    },
    houseTransactions: {
        type: String,
        enum: ['Kiro', 'Iibin', 'Badal', 'Iibsasho'],
        required: true,
        message: 'Husstatus är obligatoriskt.',
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
    houseWifi: {
        type: String,
        enum: ['Available', 'Not Available'],
        required: true
    },

    houseWater: {
        type: String,
        enum: ['Public', 'Well', 'None'],
        required: true,
        message: 'Vatten-tilgänglighet är obligatoriskt.'
    },

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


    houseParking: {
        type: String,
        enum: ['Garage', 'Street', 'None'],
        required: true,
        message: 'WiFi-tilgänglighet är obligatoriskt.'
    },
    location: {
        latitude: Number,
        longitude: Number,
    },
    createdAt: { type: Date, default: Date.now },
});

export const HouseModel = mongoose.model('HouseModel', houseSchema);
