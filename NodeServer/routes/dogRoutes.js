import express from 'express';
import { getDog, getDogById, addDog, updateDog, deleteDog } from '../controllers/dogController.js';


const router = express.Router();
//url for this requests starts with http://localhost:8080/API/dogs
router.get('/list', getDog);
router.get('/:id', getDogById);
router.post('/', addDog);
router.put('/:id', updateDog);
router.delete('/:id', deleteDog);
export default router;