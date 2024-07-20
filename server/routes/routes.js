import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router()

router.post("/createUser", userController.createUserDetails)
router.get("/", userController.getUserDetails)

export default router
 