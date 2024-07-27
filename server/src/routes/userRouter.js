import express from 'express'
import UserController from '../controllers/UserController.js'

const userRouter=express.Router()
const userControll=new UserController()
userRouter.get('/',userControll.getAllUser)
userRouter.get('/:id',userControll.getUserById)
userRouter.put('/:id',userControll.updateUser)
userRouter.patch('/:id',userControll.updateStatusUser)

export default userRouter