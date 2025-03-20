import { Router } from "express"

export const userRouter = Router()

//GET ALL USERS
userRouter.get('/')

//GET ONE USER
userRouter.get('/:id')

//CREATE ONE USER
userRouter.post('/')

//DELETE ONE USER
userRouter.delete('/:id')

