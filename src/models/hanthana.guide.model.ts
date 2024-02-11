import mongoose, { Schema, Document } from 'mongoose';

interface IHanthanaGuide extends Document {
    fullname: string;
    email: string;
    pNumber: string;
    institution: string;
    participants: number;
    accommodation: boolean;
    food: string;
    guide: boolean;
}

const HanthanaGuideSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    pNumber: { type: String, required: true },
    institution: { type: String, required: true },
    participants: { type: Number, required: true },
    accommodation: { type: Boolean, required: true },
    food: { type: String, required: true },
    guide: { type: Boolean, required: true }
});

const HanthanaGuideModel = mongoose.model<IHanthanaGuide>('HanthanaGuide', HanthanaGuideSchema);

export default HanthanaGuideModel;
