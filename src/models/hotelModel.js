import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: [true, 'Hotel name is required'],
        trim: true
    },
    isSingelRoom: {
        type: Boolean,
        default: false,
        required: [true, 'isSingelRoom is required']
    },
    price: {
        type: Number,
        default: 0,
        required: true,
        min: [0, 'Price cannot be negative']
    },
    description: {
        type: String,
        default: "",
        trim: true,
        required: true

    },
    hotelRoomWidth: {
        type: Number,
        default: 0,
        required: true,
        min: [0, 'Width cannot be negative']
    },
    hotelRoomHeight: {
        type: Number,
        default: 0,
        required: true,
        min: [0, 'Height cannot be negative'],
    },
    squareMeters: {
        type: Number,
        default: 0,
        required: true,
        min: [0, 'Square meters cannot be negative'],

    },
    privateToilet: {
        type: Boolean,
        default: false,
        required: [true, 'privateToilet is required']
    },
    available: {
        type: Boolean,
        default: false,
        required: [true, 'available is required']
    },
    fromStartDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    toEndDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    hotelRoomWifi: {
        type: Boolean,
        default: false,
        required: [true, 'hotelRoomWifi is required']
    },
    hotelRoomParking: {
        type: Boolean,
        default: false,
        required: [true, 'hotelRoomParking is required']
    },
    airportShuttle: {
        type: Boolean,
        default: false,
        required: [true, 'airportShuttle is required']
    },
    restaurant: {
        type: Boolean,
        default: false,
        required: [true, 'restaurant is required']
    },
    isNonSmokingRoom: {
        type: Boolean,
        default: false,
        required: [true, 'is Non Smoking hotel Room is required']
    },
    roomService: {
        type: Boolean,
        default: false,
        required: [true, 'room Service is required']
    },
    frontDesk24hr: {
        type: Boolean,
        default: false,
        required: [true, 'frontDesk24hr is required']
    },
    breakfast: {
        type: Boolean,
        default: false,
        required: [true, 'breakfast is required']
    },
    teaCoffeeMaker: {
        type: Boolean,
        default: false,
        required: [true, 'teaCoffeeMaker is required']
    },
category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        message: 'Category is required',
    },
    images: [{
        data: Buffer,
        contentType: String,
        required: true
    }],
}, { timestamps: true });
export const HotelModel = mongoose.model('HotelModel', hotelSchema);
