import Joi from 'joi'

interface HeroProps {
    name: string;
    alterEgo: string;
}
interface UserProps {
    id: string;
    channelId: string;
}
interface ChannelProps {
    id: string;
    courses: string[]
}
interface ColorProps {
    id: number;
    label: string;
}

export const validatorHero = (reqBody: HeroProps) => {
    const hero = Joi.object({
        name: Joi.string().min(5).max(30).required(),
        alterEgo: Joi.string().min(5).max(30).required()
    })
    return hero.validate(reqBody)
}
export const validatorUser = (reqBody: UserProps) => {
    const user = Joi.object({
        id: Joi.string().min(5).max(30),
        channelId: Joi.string().min(5).max(30).required()
    })
    return user.validate(reqBody)
}

export const validatorChannel = (reqBody: ChannelProps) => {
    const channel = Joi.object({
        id: Joi.string().min(5).max(30),
        courses: Joi.array().required()
    })
    return channel.validate(reqBody)
}

export const validatorColor = (reqBody: ColorProps) => {
    const color = Joi.object({
        label: Joi.string().min(3).max(30).required()
    })
    return color.validate(reqBody)
}
