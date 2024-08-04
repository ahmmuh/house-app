import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    isActive: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

})


export  const HouseCategory = mongoose.model("HouseCategory", CategorySchema);