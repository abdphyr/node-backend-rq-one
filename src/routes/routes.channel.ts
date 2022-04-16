import { Router } from "express";
import { getChannels, getChannel, postChannel, delChannel, putChannel } from "../controllers/ctrl.channel";

export const channelRouter = Router()
channelRouter.get('/', getChannels)
channelRouter.get('/:id', getChannel)
channelRouter.post('/', postChannel)
channelRouter.delete('/:id', delChannel)
channelRouter.put('/:id', putChannel)