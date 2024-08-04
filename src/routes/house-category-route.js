import express from 'express';
import {
    createHouseCategory, deleteHouseCategory,
    getHouseCategories,
    getHouseCategoriesById, updateHouseCategory
} from "../controllers/house-category-controller.js";




const router = express.Router();

router.get('/houses/category', getHouseCategories);
router.get('/houses/category/:id', getHouseCategoriesById);
router.post('/houses/category', createHouseCategory);
router.put('/houses/category/:id', updateHouseCategory);
router.delete('/houses/category/:id',deleteHouseCategory );



export default router;
