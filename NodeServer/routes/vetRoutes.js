import express from 'express';
import { addVets, deleteVet, getVetById, getVets, updateVet } from '../controllers/vetController.js';

const router = express.Router();

//url for this requests starts with http://localhost:8080/API/vets

router.get('/list',getVets);
router.get('/:id',getVetById);
router.post('/', addVets);
router.put('/:id',updateVet);
router.delete('/:id',deleteVet);
export default router;
