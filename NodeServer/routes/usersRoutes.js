import express from 'express';
import {getUser,addUser,getUserById,updateUser,deleteUser} from '../controllers/userController.js';

const router = express.Router();
//url for this requests starts with http://localhost:8080/API/users
router.get('/list', getUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id',deleteUser);
router.post('/', addUser);

export default router;