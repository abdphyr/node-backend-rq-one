import { RequestHandler } from "express"
import { Channel } from "../models/model.channel"
import { validatorChannel } from "./validator"

export const getChannels: RequestHandler = async (req, res) => {
    const channels = await Channel.find().select({ _id: 0, __v: 0 })
    res.send(channels)
}

export const postChannel: RequestHandler = async (req, res) => {
    const { error } = validatorChannel(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    const { id, courses } = req.body
    const newChannel = new Channel({
        id,
        courses
    })
    const savedChannel = await newChannel.save()
    res.status(201).send(savedChannel)
}

export const getChannel: RequestHandler = async (req, res) => {
    const id = req.params.id
    const channel = await Channel.findOne({ id: id })
    if (!channel) {
        res.status(404).send('Not found')
    }
    res.send(channel)
}

export const delChannel: RequestHandler = async (req, res) => {
    const id = req.params.id
    const channel = await Channel.findOne({ id: id })
    if (!channel) {
        res.status(404).send('Not found')
    }
    const deletedChannel = await Channel.findOneAndRemove({ id: id })
    res.send(deletedChannel)
}