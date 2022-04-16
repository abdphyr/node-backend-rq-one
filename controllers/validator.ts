import Joi from 'joi'

interface HeroProps {
    name: string;
    alterEgo: string;
}

export const validatorHero = (reqBody: HeroProps) => {
    const hero = Joi.object({
        name: Joi.string().min(5).max(30).required(),
        alterEgo: Joi.string().min(5).max(30).required()
    })
    return hero.validate(reqBody)
}
