import express from 'express';
import multer from 'multer'

import {
    addHouse,
    createHouse,
    deleteHouse,
    getHouseById,
    getHouses,
    updateHouse,
} from "../controllers/houseController.js";
import {upload} from "../uploadImages/uploadImage.js";



const router = express.Router();


router.get('/houses', getHouses);
router.get('/houses/:id', getHouseById);
router.post('/houses', upload.array('images'), createHouse);
router.put('/houses/:id', updateHouse);
router.delete('/houses/:id', deleteHouse);
router.post("/houses", addHouse)



export default router;
