// models/photographyReservation.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IPhotographyContactUs extends Document {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    type: string;
    message: string;
    agreed: boolean; // Assuming this indicates consent, should be a boolean
}

const PhotographyContactUsSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, required: true },
    message: { type: String, required: true },
    agreed: { type: Boolean, required: true }
});

const PhotographyContactUs = mongoose.model<IPhotographyContactUs>('PhotographyReservationContactUs', PhotographyContactUsSchema);

export default PhotographyContactUs;
