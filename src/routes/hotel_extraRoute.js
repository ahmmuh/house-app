import express from 'express';
import {
    countAllHotelRooms, getHotelRoomWithPagination,
    searchHotelRoomsByHighPrice,
    searchHotelRoomsByLowPrice
} from "../controllers/HotelController.js";


const router = express.Router();

router.get('/hotelRooms/highprices', searchHotelRoomsByHighPrice);
router.get('/hotelRooms/lowprices', searchHotelRoomsByLowPrice);
router.get('/hotelRooms/paginations', getHotelRoomWithPagination);

//count all houses
router.get("/hotelRooms/count", countAllHotelRooms);

export default router;
