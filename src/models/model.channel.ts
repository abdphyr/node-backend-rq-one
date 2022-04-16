import { Document, Schema, model, Model, Types } from 'mongoose';

export interface IChannel extends Document {
    _id: Types.ObjectId,
    id: string,
    courses: string[]
}

const channelSchema = new Schema<IChannel>({
    id: { type: String, required: true, minlength: 5, maxlength: 40 },
    courses: { type: [String], required: true }
})

export const Channel = model<IChannel>('Channel', channelSchema)