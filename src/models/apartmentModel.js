import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema({
    apartmentName: {
        type: String,
        required: true,
        trim: true,
        message: "Apartment Name is required"
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
    description: { type: String },

    apartmentKitchen: {
        type: Boolean,
        required: true,
        message: 'Kitchen är ett måste'
    },
    apartmentWidth: {
        type: Number,
        required: true,
        message: 'Ballaca dhulka waa lama huraan'
    },
    apartmentHeight: {
        type: Number,
        required: true,
        message: "Dhererka guriga waa imisa?"
    },
    squareMeters: {
        type: Number,
        required: true,
        message: 'Kvadratmeter är obligatoriskt.',
    },

    // Common attributes
    available: { type: Boolean, default: true },
    fromStartDate: { type: Date, required: true, message: 'From start date' },
    toStartDate: { type: Date, required: true, message: 'To start date' },
    children: { type: Number, default: 0, message: 'Ilmo maa kula socdo?' },
    adults: { type: Number, default: 1, required: true, message: "Meeqa qof oo aa weyn" },
    apartmentWifi: {
        type: Boolean,
        required: true
    },

    images: [{
        data: Buffer,
        contentType: String
    }],
    apartmentWater: {
        type: Boolean,
        required: true,
        message: 'Vatten-tilgänglighet är obligatoriskt.'
    },

    toilets: {
        type: Number,
        required: true,
        message: 'Antal toaletter är obligatoriskt.',
    },

    apartmentParking: {
        type: Boolean,
        required: true,
        message: 'Parking är obligatoriskt.'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },

    nonSmokingRooms: {
        type: Boolean,
        required: true,
        default: false
    },

    teaCoffeeMaker: {
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

    isEntireApartment: {
        type: Boolean,
        required: true,
        message: 'Ma guriga dhan mise qeeb ka mid ah?'
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const ApartmentModel = mongoose.model('ApartmentModel', apartmentSchema);
