import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    firstName: {
        type: String,
        required: [true, 'Magaca hore waa lama huraan']
    },
    lastName: {
        type: String,
        required: [true, 'Magaca dambe waa lama huraan']
    },
    email: {
        type: String,
        required: [true, 'Email waa lama huraan']
    },
    password: {
        type: String,
        required: [true, 'Furaha sirta waa lama huraan']
    },
    phoneNumber: {
        type: Number,
        default: 0,
        required: [true, 'Lambarka telefoonka waa lama huraan']
    },
    birthDay: {
        type: Date
    },
    profileImage: {
        type: Buffer,
        required: [true, 'Sawirka profile-ka waa lama huraan']
    },
    address: {
        streetName: {
            type: String,
            required: [true, 'Magaca wadada waa lama huraan']
        },
        city: {
            type: String,
            required: [true, 'Magaca magaalada waa lama huraan']
        },
        state: {
            type: String,
            required: [true, 'Gobolka waa lama huraan']
        },
        postalCode: {
            type: String
        },
        buildingNumber: {
            type: Number
        }
    },
    location: {
        latitude: Number,
        longitude: Number
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export const User = mongoose.model("user", userSchema);
