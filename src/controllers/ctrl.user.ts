import { RequestHandler } from "express"
import { User } from "../models/model.user"
import { validatorUser } from "./validator"

export const getUsers: RequestHandler = async (req, res) => {
    const users = await User.find().select({ _id: 0, __v: 0 })
    res.send(users)
}

export const postUser: RequestHandler = async (req, res) => {
    const { error } = validatorUser(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    const { id, channelId } = req.body
    const newUser = new User({
        id,
        channelId
    })
    const savedUser = await newUser.save()
    res.status(201).send(savedUser)
}

export const getUser: RequestHandler = async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ id: id })
    if (!user) {
        res.status(404).send('Not found')
    }
    res.send(user)
}