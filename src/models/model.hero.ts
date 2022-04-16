import { model, Schema, Document } from 'mongoose';

interface IHero extends Document {
    id: number;
    name: string;
    alterEgo: string;
}

const heroSchema: Schema = new Schema<IHero>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    alterEgo: { type: String, required: true }
})

export const Hero = model<IHero>("Hero", heroSchema)

