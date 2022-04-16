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
        return
    }
    res.send(user)
}

export const putUser: RequestHandler = async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ id: id })
    if (!user) {
        res.status(404).send('Not found')
        return;
    }
    const { error } = validatorUser(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    const updatedUser = await User.updateOne({ id: id }, {
        $set: {
            channelId: req.body.channelId
        }
    })
    res.status(200).send(updatedUser)
}

export const delUser: RequestHandler = async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ id: id })
    if (!user) {
        res.status(404).send('Not found')
        return;
    }
    const deletedUser = await User.findOneAndRemove({ id: id })
    res.send(deletedUser)
}