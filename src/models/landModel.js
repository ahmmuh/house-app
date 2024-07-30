import mongoose from 'mongoose';

const landSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    LandLength: {
        type: Number,
        required: true
    },
    landWidth: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    landType: {
        type: String,
        enum: ['Beer', 'Dhulbanaan', 'Dukaan', 'Warshadaha'],
        required: true
    },
    // beer in english
    farmType: {
        type: String,
        enum: ['Beerta Qudaarta', 'Beerta Dalagyada'],
    },
    description: {
        type: String
    },
    availability: {
        type: String,
        enum: ['Iib', 'Kiraynta'],
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
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
});

const LandModel = mongoose.model('LandModel', landSchema);

export default LandModel;
