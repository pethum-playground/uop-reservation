import mongoose, { Schema, Document } from 'mongoose';

interface IGalbongollowContactUs extends Document {
    agreed: boolean;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    type: string;
    message: string;
}

const GalbongollowContactUsSchema: Schema = new Schema({
    agreed: { type: Boolean, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, required: true },
    message: { type: String, required: true }
});

const GalbongollowContactUs = mongoose.model<IGalbongollowContactUs>('GalbongollowReservationContactUs', GalbongollowContactUsSchema);

export default GalbongollowContactUs;
