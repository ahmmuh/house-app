import mongoose from "mongoose";
const houseSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Fillo', 'Dabaq', 'Jiingad', 'Baacweeyne', 'Modul', 'Hotel'],
        required: true
    },
    description: { type: String },
    bathrooms: { type: Number, required: true },
    houseSize: { type: Number, required: true },
    thumbnail: { type: String },
    yearBuilt: {
        type: Number,
        required: true,
    },
    squareMeters: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rooms: {
        type: Number,
        required: true,
    },
    wifi: {
        type: Boolean,
        enum: ['Haa', 'Maya'],
        required: true,
    },
    water: {
        type: Boolean,
        enum: ['Haa', 'May'],
        required: true,
    },
    toilets: {
        type: Number,
        required: true,
    },
    images: [{ type: String, required: true }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    location: {
        latitude: Number,
        longitude: Number,
    },
    parking: {
        type: Boolean,
        enum: ['haa', 'Maya'],
    },
    status: {
        type: String,
        enum: ['Kiro', 'Iibin', 'Badal', 'Iibsasho'],
        required: true
    },
    createdAt: { type: Date, default: Date.now }
});
export const HouseModel = mongoose.model('HouseModel', houseSchema);
