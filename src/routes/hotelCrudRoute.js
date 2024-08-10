import express from 'express';

import {upload} from "../uploadImages/uploadImage.js";
import {createHotelRoom, deleteHotelRoom, getHotelRoomById, getHotelRooms, updateHotelRoom}
    from "../controllers/HotelController.js";

const router = express.Router();


router.get('/hotelRooms', getHotelRooms);
router.get('/hotelRooms/id', getHotelRoomById);
router.post('/hotelRooms', upload.array('images'), createHotelRoom);
router.put('/hotelRooms/:id', updateHotelRoom);
router.delete('/hotelRooms/:id', deleteHotelRoom);



export default router;
