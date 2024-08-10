import mongoose from "mongoose";

const sellhouseSchema = new mongoose.Schema({
    houseType: {
        type: String,
        enum: ['Fillo', 'Guri Dabaq ah', 'Guri Jiingad', 'Baacweeyne', 'Modul', 'Hotel', 'Guri firaashan'],
        required: true,
        message: 'Dooro nuuca guriga aa dooneeysid, walaal.',
    },
    houseTransactions: {
        type: String,
        enum: ['Kiro', 'Iibin', 'Iibsasho', 'Baddal'],
        required: true,
        message: 'Hus status är obligatoriskt.',
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
    houseWidth: {
        type: Number,
        required: true,
        message: 'Ballaca dhulka waa lama huraan'
    },
    houseKitchen: {
        type: Boolean,
        required: true,
        message: 'Kitchen är ett måste'
    },
    houseHeight: {
        type: Number,
        required: true,
        message: "Dhererka guriga waa imisa?"
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
    roomType: {
        type: String,
        enum: ['Qol caadi ah (Singel room)', 'Qol alaab wareeg ah taalo (Double room'],
        default: 'single room'
    },
    privateBathroom: {
        type: Boolean,
        enum: ['Yes', 'No'],
        default: false
    },
    available: { type: Boolean, default: true },
    fromStartDate: { type: Date, required: true, message: 'From start date' },
    toStartDate: { type: Date, required: true, message: 'To start date' },
    children: { type: Number, default: 0, message: 'Ilmo maa kula socdo?' },
    adults: { type: Number, default: 1, required: true, message: "Meeqa qof oo aa weyn" },
    houseWifi: { type: Boolean, required: true },
    images: [{
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
    toiletType: {
        type: String,
        enum: ['private', 'public'],
        default: 'public'
    },
    houseParking: {
        type: Boolean,
        required: true,
        message: 'Parking är obligatoriskt.'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
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
    }
});
export const SellHouseModel = mongoose.model('SellHouseModel', sellhouseSchema);
