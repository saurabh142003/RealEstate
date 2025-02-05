import express, { Router } from 'express'
import { deleteUser, getUser, getUserListings, updateUser } from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyToken.js'
const router = express.Router()
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/listings/:id',verifyToken,getUserListings)
router.get('/:id',verifyToken,getUser)
export default router