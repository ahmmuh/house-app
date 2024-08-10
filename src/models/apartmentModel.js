import mongoose from "mongoose";
const apartmentSchema = new mongoose.Schema({
    description: { type: String },
    bathrooms: {
        type: Number,
        required: true,
        message: 'Antal badrum är obligatoriskt.',
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
    fromStartDate: { type: Date, required: true, message: 'From start date' },
    toStartDate: { type: Date, required: true, message: 'To start date' },
    children: { type: Number, default: 0, message: 'Ilmo maa kula socdo?' },
    adults: {type: Number, default: 1, required: true,message: "Meeqa qof oo aa weyn"},
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

    /*
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
        },*/

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

    dailyHousekeeping: {
        type: Boolean,
        required: true,
        default: false
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const ApartmentModel = mongoose.model('ApartmentModel', apartmentSchema);
