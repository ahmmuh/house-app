import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
hotelName:{
    type:String,
    required:true,
    trim:true,
    message:"name is required"

},
    roomType: {
        type: String,
        default: 'single room'
    },

    price: {
        type: Number,
        required: true,
        message: 'Pris är obligatoriskt.',
    },


    description: { type: String },
    hotelRoomWidth: {
        type: Number,
        required: true,
        message: 'Ballaca dhulka waa lama huraan'
    },

    hotelRoomHeight: {
        type: Number,
        required: true,
        message: "Dhererka guriga waa imisa?"
    },
    squareMeters: {
        type: Number,
        required: true,
        message: 'Kvadratmeter är obligatoriskt.',
    },

    privateToilet: {
        type: Boolean,
        default: false
    },
    available: {
        type: Boolean,
        default: true
    },
    fromStartDate: {
        type: Date,
        required: true,
        message: 'From start date'
    },
    toStartDate: {
        type: Date,
        required: true,
        message: 'To start date'
    },
    children: {
        type: Number,
        default: 0,
        message: 'Ilmo maa kula socdo?'
    },
    adults: {
        type: Number,
        default: 1,
        required: true,
        message: "Meeqa qof oo aa weyn"
    },
    hotelRoomWifi: {
        type: Boolean,
        required: true
    },
    images: [{
        data: Buffer,
        contentType: String
    }],

    hotelRoomParking: {
        type: Boolean,
        required: true,
        message: 'Parking är obligatoriskt.'
    },
    airportShuttle: {
        type: Boolean,
        required: true,
        default: false
    },
    restaurant: {
        type: Boolean,
        required: true,
        default: false
    },
    isNonSmokingRoom: {
        type: Boolean,
        required: true,
        default: false
    },
    roomService: {
        type: Boolean,
        required: true,
        default: false
    },
    frontDesk24hr: {
        type: Boolean,
        required: true,
        default: false
    },
    breakfast: {
        type: Boolean,
        required: true,
        default: false
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },

});

export const HotelModel = mongoose.model('HotelModel', hotelSchema);
