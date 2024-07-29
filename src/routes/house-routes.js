import express from 'express';
import {
    getCity,
    getHouseList,
     searchHousesByHighPrice,
    searchHousesByLowPrice,
    getHousesWithPagination,
    countAllHouses,
} from "../controllers/apiController.js";

const router = express.Router();

router.get('/houses/highprices', searchHousesByHighPrice);
router.get('/houses/lowprices', searchHousesByLowPrice);

router.get('/houses/paginations', getHousesWithPagination);
router.get("/lista", getHouseList);
router.get("/districts", getCity)
//count all houses
router.get("/houses/count", countAllHouses);

export default router;
