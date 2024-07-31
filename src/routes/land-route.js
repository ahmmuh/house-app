import express from 'express';
import {
    createLand,
    deleteLand,
    getLandById,
    getLands,
    updateLand,
} from "../controllers/landController.js";

const router = express.Router();

router.get('/lands', getLands);
router.get('/lands/:id', getLandById);
router.post('/lands', createLand);
router.put('/lands/:id', updateLand);
router.delete('/lands/:id', deleteLand);

export default router;
