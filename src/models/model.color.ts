import { model, Schema, Document, Types } from 'mongoose';

interface IColor extends Document {
    _id: Types.ObjectId;
    id: number;
    label: string;
}

const colorSchema = new Schema<IColor>({
    id: { type: Number, required: true },
    label: { type: String, required: true }
})

export const Color = model<IColor>("Color", colorSchema)