import { Router } from 'express'
import { getUser, getUsers, postUser, delUser, putUser } from '../controllers/ctrl.user'
export const userRouter = Router()
userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', postUser)
userRouter.put('/:id', putUser)
userRouter.delete('/:id', delUser)