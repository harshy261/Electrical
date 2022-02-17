import express from 'express'
const router = express.Router()
import {homeController} from "../controllers/homeController.js";
import {userController} from "../controllers/userController.js";


router.get('/', homeController)
router.post('/', userController.createDoc)



export default router


