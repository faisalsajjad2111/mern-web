import express from 'express'
import { createReview } from "./../controller/reviewController.js"
import { verifyUser } from '../utils/verifytoken.js';
const router = express.Router()
router.post('/:tourId',verifyUser,createReview );
export default router