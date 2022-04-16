import { Router } from 'express'
import { getUser, getUsers, postUser } from '../controllers/ctrl.user'
export const userRouter = Router()
userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', postUser)