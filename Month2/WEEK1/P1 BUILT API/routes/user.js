import express from 'express'
import { getAll, getByID, create, update, deleteByid } from '../controller/userControl.js';

const router = express.Router()


router.get('/users', getAll);

router.get('/users/:id', getByID);

router.post('/users', create);

router.delete('/users/:id', deleteByid);

router.patch('/users/:id', update);

export default router