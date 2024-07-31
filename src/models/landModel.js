import mongoose from 'mongoose';

const landSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Magaca waa lama huraan']
    },
    LandLength: {
        type: Number,
        required: [true, 'Dhererka dhulka waa lama huraan']
    },
    landWidth: {
        type: Number,
        required: [true, 'Ballaca dhulka waa lama huraan']
    },
    price: {
        type: Number,
        required: [true, 'Qiimaha waa lama huraan']
    },
    landType: {
        type: String,
        enum: {
            values: ['Beer', 'Dhulbanaan', 'Dukaan', 'Warshadaha'],
            message: 'Nooca dhulka waa inuu ka mid ahaadaa: Beer, Dhulbanaan, Dukaan, Warshadaha'
        },
        required: [true, 'Nooca dhulka waa lama huraan']
    },
    farmType: {
        type: String,
        enum: {
            values: ['Beerta Qudaarta', 'Beerta Dalagyada'],
            message: 'Nooca beerta waa inuu ka mid ahaadaa: Beerta Qudaarta, Beerta Dalagyada'
        }
    },

    landPosition:{
        type: String,
        enum: ['Birimo','Sugunto']
    },
    description: {
        type: String
    },
    availability: {
        type: String,
        enum: {
            values: ['Iib', 'Kiraynta'],
            message: 'Helitaanka waa inuu ka mid ahaadaa: Iib, Kiraynta'
        },
        required: [true, 'Helitaanka waa lama huraan']
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Milkiilaha waa lama huraan']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: [true, 'Nooca goobta waa lama huraan']
        },
        coordinates: {
            type: [Number],
            required: [true, 'Isuduwaha waa lama huraan']
        }
    },
});

const LandModel = mongoose.model('LandModel', landSchema);

export default LandModel;
