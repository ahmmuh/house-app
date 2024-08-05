import mongoose from "mongoose";

/*const imageSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String
});*/
const houseSchema = new mongoose.Schema({
    houseType: {
        type: String,
        enum:
            ['Fillo', 'Guri Dabaq ah', 'Guri Jiingad', 'Baacweeyne',
            'Modul', 'Hotel','Guri firaashan'
            ],
        required: true,
        message: 'Dooro nuuca guriga aa dooneeysid, walaal.',
    },

    //gör om det till och fixa controll class för att kunna hantera detta dymaniskt
    houseTransactions: {
        type: String,
        enum: ['Kiro', 'Iibin', 'Iibsasho', 'Baddal'],
        required: true,
        message: 'Husstatus är obligatoriskt.',
    },
    houseStairs: {
        type: String,
        enum: ['Dabaq 1 aad ','Dabaq 2 aad','Dabaq 3 aad','Dabaq 4aad '],
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
    houseKitchen:{
        type: String,
        enum:['Haa','Maya']
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

    roomType: { type: String, enum: ['single room', 'double room'], default: 'single room' },
    privateBathroom: { type: Boolean, enum:['Yes','No'], default: false },
    // Common attributes
    available: { type: Boolean, default: true },
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
    toiletType: { type: String, enum: ['private', 'public'], default: 'public' },

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
