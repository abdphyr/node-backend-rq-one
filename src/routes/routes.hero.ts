import { Router } from "express";
import { getHeroes,postHero } from '../controllers/ctrl.hero'
import { getHero, putHero, delHero } from "../controllers/ctrl.hero";

export const heroRouter = Router()
heroRouter.get('/', getHeroes)
heroRouter.get('/:id', getHero)
heroRouter.post('/', postHero)
heroRouter.put('/:id', putHero)
heroRouter.delete('/:id', delHero)
