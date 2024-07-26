import express from 'express';
import {
    createHouse,
    deleteHouse,
    getHouseById,
    getHouses, getHousesWithPagination,
    searchHousesByHighPrice, searchHousesByLowPrice,
    updateHouse,
} from "../controllers/webController.js";

const router = express.Router();

router.get('/houses', getHouses);
router.get('/houses/:id', getHouseById);
router.post('/houses', createHouse);
router.put('/houses/:id', updateHouse);
router.delete('/houses/:id', deleteHouse);

router.get('/houses/searchByHighPrices', searchHousesByHighPrice);
router.get('/houses/highprices', searchHousesByLowPrice);
router.get('/houses/lowprices', searchHousesByLowPrice);

router.get('/houses/pagination', getHousesWithPagination);

//count all houses
//router.get("/houses/count", countAllHouses);

export default router;
