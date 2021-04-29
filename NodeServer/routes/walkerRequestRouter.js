import express from 'express';
import {getWalkerRequest, addWalkerRequest, getWalkerRequestById, deleteWalkerRequest, updateWalkerRequest} from '../controllers/walkerRequestController.js'

const router = express.Router();
//url for this requests starts with http://localhost:8080/API/requests

router.get('/list',getWalkerRequest);
router.get('/:id', getWalkerRequestById);
router.post('/',addWalkerRequest);
router.delete('/:id',deleteWalkerRequest);
router.put('/:id',updateWalkerRequest);
export default router;
