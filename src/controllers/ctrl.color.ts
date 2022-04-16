import { RequestHandler } from "express";
import { Color } from "../models/model.color";
import { validatorColor } from "./validator";

export const getColors: RequestHandler = async (req, res) => {
    const colors = await Color.find().select({ _id: 0, __v: 0 })
    res.send(colors)
}

export const getColor: RequestHandler = async (req, res) => {
    const id = parseInt(req.params.id)
    const color = await Color.findOne({ id: id }).select({ _id: 0, __v: 0 })
    if (!color) {
        res.status(404).send("Not found")
        return;
    }
    res.send(color)
}

export const postColor: RequestHandler = async (req, res) => {
    const colors = await Color.find()
    const { error } = validatorColor(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
    }
    const newColor = new Color({
        id: colors.length + 1,
        label: req.body.label
    })
    const savedColor = await newColor.save()
    res.status(201).send(savedColor)
}

