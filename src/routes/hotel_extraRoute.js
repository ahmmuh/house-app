import express from 'express';
import {
    countAllHotels,
    getHotelWithPagination,
    searchHotelsByHighPrice

} from "../controllers/HotelController.js";


const router = express.Router();

router.get('/hotes/highprices', searchHotelsByHighPrice);
router.get('/hotels/lowprices', searchHotelsByHighPrice);
router.get('/hotels/paginations', getHotelWithPagination);

//count all houses
router.get("/hotels/count", countAllHotels);

export default router;
