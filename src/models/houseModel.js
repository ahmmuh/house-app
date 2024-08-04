import mongoose from "mongoose";

/*const imageSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String
});*/
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
    description: { type: String },
    bathrooms: {
        type: Number,
        required: true,
        message: 'Antal badrum är obligatoriskt.',
    },
    yearBuilt: {
        type: Date,
        required: true,
        message: 'Byggår är obligatoriskt.',
    },
    houseWidth:{
        type: Number,
        required: true,
        message: 'Ballaca dhulka waa lama huraan'
    },
    houseHeight: {
        type: Number,
        required: true,
        message:"Dhererka guriga waa imisa?"
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
        enum: ['Haa', 'Maya'],
        required: true
    },
 /*   thumbnail:{
        data: Buffer,
        type: String,
        required: true
    },*/
  images:[{
        data: Buffer,
        contentType: String
    }],
    houseWater: {
        type: String,
        enum: ['Haa', 'Biyo malahan'],
        required: true,
        message: 'Vatten-tilgänglighet är obligatoriskt.'
    },

    toilets: {
        type: Number,
        required: true,
        message: 'Antal toaletter är obligatoriskt.',
    },
/*    images: [imageSchema],*/
    houseParking: {
        type: String,
        enum: ['Garage', 'Street', 'None'],
        required: true,
        message: 'WiFi-tilgänglighet är obligatoriskt.'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const HouseModel = mongoose.model('HouseModel', houseSchema);
