import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        trim: true,
        required: true,
    },
    isSingelRoom: {
        type: Boolean,
        default: false,
    },
    price: {
        type: Number,
        default: 0,
        required: true,
        min: 0
    },
    description: {
        type: String,
        trim: true,

    },
    hotelRoomWidth: {
        type: Number,
        default: 0,
        min:0
    },
    hotelRoomHeight: {
        type: Number,
        default: 0,
        min: 0
    },
    squareMeters: {
        type: Number,
        default: 0,
        min: 0

    },
    privateToilet: {
        type: Boolean,
        default: false,
    },
    available: {
        type: Boolean,
        default: false,
    },
    fromStartDate: {
        type: Date,
        default: Date.now,
    },
    toEndDate: {
        type: Date,
        default: Date.now,
    },
    hotelRoomWifi: {
        type: Boolean,
        default: false,
    },
    hotelRoomParking: {
        type: Boolean,
        default: false,
    },
    airportShuttle: {
        type: Boolean,
        default: false,
    },
    restaurant: {
        type: Boolean,
        default: false,
    },
    isNonSmokingRoom: {
        type: Boolean,
        default: false,
    },
    roomService: {
        type: Boolean,
        default: false,
    },
    frontDesk24hr: {
        type: Boolean,
    },
    breakfast: {
        type: Boolean,
        default: false,
    },
    teaCoffeeMaker: {
        type: Boolean,
        default: false,
    },
        category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        message: 'Category is required',
    },
    images: [{
        data: Buffer,
        contentType: String,
    }],
}, { timestamps: true });
export const HotelModel = mongoose.model('HotelModel', hotelSchema);
