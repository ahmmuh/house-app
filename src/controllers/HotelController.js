import { Category } from "../models/Category.js"
import mongoose from "mongoose"
import { convertImageToBase64 } from "../utils/convertImageTobase64.js" // Importera Buffer från Node.js
import Hotel from "../models/hotel.js"
import imageOptimazationHandler from "../uploadImages/imageOptimization/imageOptimization.js"
export const getHotels = async (req, res) => {
  try {
    const hotelList = await Hotel.find()
    res.status(200).json(hotelList) // Skickar tillbaka listan med hus i JSON-format
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to load resource: the server responded with a status of 500 (Internal Server Erro",
    })
  }
}

export const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id)

    if (hotel) {
      res.status(200).send(hotel)
    } else {
      res.status(400).json({ success: false, message: "hotel Not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}

export const createHotel = async (req, res) => {
  try {
    console.log("Req by id", req.params.id)
    const categoryID = await Category.findById(req.params.id)
    if (mongoose.isValidObjectId(categoryID)) {
      Category.findById(req.id, (err, category) => {
        if (err) {
          console.log(err)
        } else {
          console.log(category)
        }
      })
    } else {
      console.log("Invalid category ID: ", categoryID)
    }

    const {
      hotelName,
      price,
      description,
      airportShuttle,
      rooms,
      amenities,
      privateToilet,
      hotelWifi,
      location,
      frontDesk24hr,
      restaurant,
      category,
    } = req.body

    if (!req.files || !req.files.images) {
      return res.status(400).send("No files were uploaded.")
    }

    const images = Array.isArray(req.files.images)
      ? req.files.images
      : [req.files.images]

    const optimaziedImages = await Promise.all(
      images.map(async (file) => {
        return imageOptimazationHandler(file.data)
      })
    )

    console.log("Images Optimized Successfully")

    const newHotel = new Hotel({
      hotelName,
      price,
      description,
      airportShuttle,
      rooms,
      amenities,
      privateToilet,
      hotelWifi,
      location,
      frontDesk24hr,
      restaurant,
      optimaziedImages,
      category,
    })

    console.log("New hotel room object with Category ID", newHotel)
    // await newHotel.save()
    res.status(201).json({ message: "One Hotel has been created" })
  } catch (error) {
    res.status(500).json({
      error: "Fadlan iska hubi inaa buux buuxisay warbixin dhamestiran",
      msg: error.message,
    })
    console.log("Images Optimized Fail")
  }
}
// export const createHotel = async (req, res) => {
//   try {
//     // Hämta kategori-ID från req.params
//     const id = await Category.findById(req.params.id)
//     // Kontrollera om ID är giltigt
//     if (!mongoose.isValidObjectId(id)) {
//       return res.status(400).json({
//         error: "Invalid category ID",
//       })
//     }

//     // Hitta kategori
//     const category = await Category.findById(id)
//     if (!category) {
//       return res.status(404).json({
//         error: "Category not found",
//       })
//     }

//     // Omvandla bilder till Base64
//     const images = convertImageToBase64(req) // Se till att denna funktion är korrekt implementerad

//     // Hämta data från request body
//     const {
//       hotelName,
//       price,
//       description,
//       airportShuttle,
//       rooms,
//       amenities,
//       privateToilet,
//       hotelWifi,
//       location,
//       frontDesk24hr,
//       restaurant,
//     } = req.body

//     // Skapa ny hotellinstans
//     const newHotel = new Hotel({
//       hotelName,
//       price,
//       description,
//       airportShuttle,
//       rooms,
//       amenities,
//       privateToilet,
//       hotelWifi,
//       location,
//       frontDesk24hr,
//       restaurant,
//       images,
//       category: id, // Använd det korrekta ID:t
//     })

//     // Spara den nya hotellinstansen
//     // await newHotel.save()
//     console.log(newHotel)
//     // Skicka svar
//     res.status(201).json({ message: "One hotel has been created" })
//   } catch (error) {
//     res.status(500).json({
//       error: "Fadlan iska hubi inaa buux buuxisay warbixin dhamestiran",
//       msg: error.message,
//     })
//   }
// }

export const updateHotel = async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!updateHotel) throw new Error("Hotel Not found for update")
    res.status(200).json(updateHotel) // Returnerar det uppdaterade huset
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

export const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
    if (!deletedHotel) throw new Error("No Hotel Room found")
    res.status(200).send("Deleted")
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
// extra functions

export const getHotelWithPagination = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1 // Aktuell sida (default: 1)
    const pageSize = parseInt(req.query.pageSize) || 10 // Antal objekt per sida (default: 10)

    const totalHotels = await Hotel.countDocuments() // Totalt antal hus
    const totalPages = Math.ceil(totalHotelRooms / pageSize) // Totalt antal sidor

    const hotels = await Hotel.find()
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize)

    res.status(200).json({
      hotels,
      currentPage,
      totalPages,
      pageSize,
      totalHotels,
    })
  } catch (e) {
    res.status(500).json({ message: "Fel med paginated hotel rooms" })
  }
}

//high price
export const searchHotelsByHighPrice = async (req, res) => {
  try {
    const highPriceHotels = await Hotel.find({ price: { $gte: 200 } })
    console.log("High prices: ", highPriceHotels)
    res.status(200).json(highPriceHotels)
  } catch (e) {
    res.status(500).json({ message: "Fel med high Price på hotel" })
  }
}

//search by low price
export const searchHotelsByLowPrice = async (req, res) => {
  try {
    const lowPriceHotels = await Hotel.find({ price: { $lte: 200 } })
    console.log("Low prices by: ", lowPriceHotels)
    res.status(200).json(lowPriceHotels)
  } catch (e) {
    res.status(500).json({ message: "Fel med low price" })
  }
}

export const countAllHotels = async (req, res) => {
  try {
    const countedHotels = await Hotel.findOne().countDocuments()
    res.status(200).json({ TotalHotelRooms: countedHotels })
  } catch (err) {
    res.status(500).json({ message: "Internal server error" })
  }
}

// const images = req.body.images
