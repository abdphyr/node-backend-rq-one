import { Router } from "express";
import { getHeroes } from '../controllers/ctrl.hero'
import { postHero } from "../controllers/ctrl.hero";
import { getHero } from "../controllers/ctrl.hero";
import { putHero } from "../controllers/ctrl.hero";

export const heroRouter = Router()
heroRouter.get('/', getHeroes)
heroRouter.get('/:id', getHero)
heroRouter.post('/', postHero)
heroRouter.put('/:id', putHero)