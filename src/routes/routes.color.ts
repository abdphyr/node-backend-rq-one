import { Router } from "express";
import { getColors, getColor, postColor } from "../controllers/ctrl.color";
export const colorRouter = Router()
colorRouter.get('/', getColors)
colorRouter.get('/:id', getColor)
colorRouter.post('/', postColor)