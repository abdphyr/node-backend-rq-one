import { Request, Response } from 'express'
import { Hero } from '../models/model.hero'
import { validatorHero } from './validator'

export const getHeroes = async (req: Request, res: Response) => {
    const heroes = await Hero.find().select('id name alterEgo')
    res.status(200).send(heroes)
}

export const postHero = async (req: Request, res: Response) => {
    const reqBody = req.body
    const { error } = validatorHero(reqBody)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const heroes = await Hero.find()
    const hero = new Hero({
        id: heroes.length + 1,
        name: reqBody.name,
        alterEgo: reqBody.alterEgo
    })
    const newHero = await hero.save()
    res.status(201).send(newHero)
}

export const putHero = async (req: Request, res: Response) => {
    const reqBody = req.body
    const id = req.params.id
    const hero = await Hero.findOne({ id: id })
    if (!hero) {
        return res.status(404).send('Not found')
    }
    const { error } = validatorHero(reqBody)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    hero.name = reqBody.name
    hero.alterEgo = reqBody.alterEgo
    const savedHero = await hero.save()
    return res.status(200).send(savedHero)

}

export const getHero = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const hero = await Hero.findOne({ id: id })
    if (!hero) {
        return res.status(404).send("Not found")
    }
    res.status(200).send(hero)
}