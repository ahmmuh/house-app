import express from "express"
import multer from "multer"

import {
  addHouse,
  createHouse,
  deleteHouse,
  getHouseById,
  getHouses,
  updateHouse,
} from "../controllers/houseController.js"
import { getHouseCategoriesById } from "../controllers/house-category-controller.js"
import uploadImages from "../uploadImages/uploadImage.js"

const router = express.Router()

router.get("/houses", getHouses)
router.get("/houses/:id", getHouseById)
router.get("/houses/category/:categoryId", getHouseCategoriesById)
router.post("/houses", uploadImages().array("images", 10), createHouse)
router.put("/houses/:id", updateHouse)
router.delete("/houses/:id", deleteHouse)
router.post("/houses", addHouse)

export default router
