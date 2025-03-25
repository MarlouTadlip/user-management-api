import { Router } from "express"
import { deleteUser } from "../controllers/user.controllers"

export const userRouter = Router()

//DELETE ONE USER
userRouter.delete('/:id', deleteUser)

