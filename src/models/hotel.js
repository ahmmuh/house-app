import mongoose from "mongoose"
import { type } from "os"
const Schema = mongoose.Schema

const hotelSchema = new Schema({
  hotelName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  airportShuttle: {
    type: Boolean,
    default: false,
  },
  rooms: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String], // En lista med strängar för att beskriva bekvämligheter
    default: [],
  },
  privateToilet: {
    type: Boolean,
    default: false,
  },
  hotelWifi: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    required: true,
  },
  frontDesk24hr: {
    type: Boolean,
    default: false,
  },
  restaurant: {
    type: Boolean,
    default: false,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Waxaa doorataa Category"],
  },

  images: {
    type: [Buffer],
    required: true,
  },
})

const Hotel = mongoose.model("Hotel", hotelSchema)
export default Hotel
