import express from "express"
import createBook from "../controllers/create.js"
import getAllController from '../controllers/get_all.js'

const { get_all } = getAllController

let router = express.Router();

router.post('/create', createBook);
router.get('/', get_all)

export default router