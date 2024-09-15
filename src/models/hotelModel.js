import mongoose from "mongoose"

const hotelSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      trim: true,
      required: true,
    },

    price: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      trim: true,
    },

    privateToilet: {
      type: Boolean,
      default: false,
    },

    hotelWifi: {
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

    frontDesk24hr: {
      type: Boolean,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      message: "Category is required",
    },
    images: [
      {
        data: Buffer,
        contentType: String,
      },
    ],
  },
  { timestamps: true }
)
export const HotelModel = mongoose.model("HotelModel", hotelSchema)
