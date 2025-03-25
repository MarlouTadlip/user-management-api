import { Router } from "express";
import { deleteUser, createUser } from "../controllers/user.controllers";

export const userRouter = Router();

// DELETE ONE USER
userRouter.delete('/:id', deleteUser);

// CREATE ONE USER
userRouter.post('/', createUser);
