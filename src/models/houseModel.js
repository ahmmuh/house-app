import mongoose from "mongoose";
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
        message: 'Hus status är obligatoriskt.',
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
        type: Boolean,
        required: true,
        message: 'Kitchen är ett måste'
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

    roomType: { type: String, enum: ['Qol caadi ah (Singel room)', 'Qol alaab wareeg ah taalo (Double room'], default: 'single room' },
    privateBathroom: { type: Boolean, enum:['Yes','No'], default: false },
    // Common attributes
    available: { type: Boolean, default: true },
    houseWifi: {
        type: Boolean,
        required: true
    },

  images:[{
        data: Buffer,
        contentType: String
    }],
    houseWater: {
        type: Boolean,
        required: true,
        message: 'Vatten-tilgänglighet är obligatoriskt.'
    },

    toilets: {
        type: Number,
        required: true,
        message: 'Antal toaletter är obligatoriskt.',
    },
    toiletType: { type: String, enum: ['private', 'public'], default: 'public' },

    houseParking: {
        type: Boolean,
        required: true,
        message: 'Parking är obligatoriskt.'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },


    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    airportShuttle: {
        type: Boolean,
        required: true,
        default: false
    },
    familyRooms: {
        type: Boolean,
        required: true,
        default: false
    },

    restaurant: {
        type: Boolean,
        required: true,
        default: false
    },
    nonSmokingRooms: {
        type: Boolean,
        required: true,
        default: false
    },
    roomService: {
        type: Boolean,
        required: true,
        default: false
    },
    rontDesk24hr: {
        type: Boolean,
        required: true,
        default: false
    },
    teaCoffeeMaker: {
        type: Boolean,
        required: true,
        default: false
    },
    breakfast: {
        type: Boolean,
        required: true,
        default: false
    },

    terrace: {
        type: Boolean,
        required: true,
        default: false
    },
    laundry: {
        type: Boolean,
        required: true,
        default: false
    },
    elevator: {
        type: Boolean,
        required: true,
        default: false
    },
    dailyHousekeeping: {
        type: Boolean,
        required: true,
        default: false
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const HouseModel = mongoose.model('HouseModel', houseSchema);
