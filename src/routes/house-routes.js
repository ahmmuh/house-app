import express from 'express';
import {
    getCity,
    searchHousesByHighPrice,
    searchHousesByLowPrice,
    getHousesWithPagination,
    countAllHouses, getHouseEnumTypeValues, getCities,
} from "../controllers/houseController.js";

const router = express.Router();

router.get('/houses/highprices', searchHousesByHighPrice);
router.get('/houses/lowprices', searchHousesByLowPrice);

router.get('/houses/paginations', getHousesWithPagination);
router.get("/houses/enums/:enumType", getHouseEnumTypeValues);
router.get("/houses/cities/:cityName",getCities)

router.get("/districts", getCity)
//count all houses
router.get("/houses/count", countAllHouses);

export default router;
