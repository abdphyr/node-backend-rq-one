import { Document, Schema, model, Model, Types } from 'mongoose';

export interface IUser extends Document {
    _id: Types.ObjectId,
    id: string,
    channelId: string;
}

const userSchema = new Schema<IUser>({
    id: { type: String, required: true, minlength: 5, maxlength: 40 },
    channelId: { type: String, required: true, minlength: 5, maxlength: 40 }
})

export const User = model<IUser>('User', userSchema)
