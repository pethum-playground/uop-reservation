import {Request, Response} from "express";
import GalbongollowReservation from "../../../models/galbongollow-reservation.model";
import GalbongollowContactUs from "../../../models/bangollow-contact-us.model";

export default class GalBangollowController {

    public async createRequest(req: Request, res: Response): Promise<void> {
        try {
            const galbongollowReservation = new GalbongollowReservation(req.body);
            await galbongollowReservation.save();
            res.status(201).send(galbongollowReservation);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async createContactUs(req: Request, res: Response): Promise<void> {
        try {
            const galbongollowContactUs = new GalbongollowContactUs(req.body);
            await galbongollowContactUs.save();
            res.status(201).send(galbongollowContactUs);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
