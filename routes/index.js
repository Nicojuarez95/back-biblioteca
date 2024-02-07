import express from 'express'
import booksRouter from "../routes/book.js"
let router = express.Router();

router.use('/book', booksRouter);

export default router