import mongoose, { Schema, Document } from 'mongoose';

interface IPhotographyReservation extends Document {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    type: string;
    message: string;
    agreed: boolean;
}

const PhotographyReservationSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, required: true },
    message: { type: String, required: true },
    agreed: { type: Boolean, required: true }
});

const PhotographyReservation = mongoose.model<IPhotographyReservation>('PhotographyReservation', PhotographyReservationSchema);

export default PhotographyReservation;
