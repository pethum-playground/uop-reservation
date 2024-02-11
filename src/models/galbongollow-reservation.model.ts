import mongoose, { Schema, Document } from 'mongoose';

interface IGalbongollowReservation extends Document {
    name: string;
    checkinDate: Date;
    checkoutDate: Date;
    paymentSlip: string;
}

const GalbongollowReservationSchema: Schema = new Schema({
    name: { type: String, required: true },
    checkinDate: { type: Date, required: true },
    checkoutDate: { type: Date, required: true },
    paymentSlip: { type: String, required: true }
});

const GalbongollowReservation = mongoose.model<IGalbongollowReservation>('GalbongollowReservation', GalbongollowReservationSchema);

export default GalbongollowReservation;
