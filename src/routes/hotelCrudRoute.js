import express from "express"
import {
  createHotel,
  deleteHotel,
  getHotelById,
  getHotels,
  updateHotel,
} from "../controllers/HotelController.js"
import uploadImages from "../uploadImages/uploadImage.js"

const router = express.Router()
router.get("/hotels", getHotels)
router.get("/hotels/id", getHotelById)
router.post("/hotels/:id", uploadImages().array("images", 10), createHotel)
router.put("/hotels/:id", updateHotel)
router.delete("/hotels/:id", deleteHotel)

export default router
