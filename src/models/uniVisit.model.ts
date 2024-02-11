import mongoose, { Schema, Document } from 'mongoose';

interface IUniVisit extends Document {
    fullname: string;
    email: string;
    pNumber: string;
    institution: string;
    participants: number;
    food: string;
    pointOfContact: string;
    date: Date;
    guide: boolean;
}

const UniVisitSchema: Schema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    pNumber: { type: String, required: true },
    institution: { type: String, required: true },
    participants: { type: Number, required: true },
    food: { type: String, required: true }, // Could be further validated based on your needs
    pointOfContact: { type: String, required: true },
    date: { type: Date, required: true },
    guide: { type: Boolean, required: true }
});

const UniVisitModel = mongoose.model<IUniVisit>('UniVisit', UniVisitSchema);

export default UniVisitModel;
