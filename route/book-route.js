import express from 'express';
import { addBook, getBook, getFreeBook } from '../controller/book-controller.js';

const router = express.Router();
router.get('/', getBook);
router.get('/free', getFreeBook);
router.post('/add', addBook);

export default router;
