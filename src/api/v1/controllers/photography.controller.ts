import {Request, Response} from "express";
import PhotographyReservation from "../../../models/photography-reservation.model";
import PhotographyContactUs from "../../../models/photography-contact-us.model";

export default class PhotographyController {

    public async createRequest(req: Request, res: Response): Promise<void> {
        try {
            const photographyReservation = new PhotographyReservation(req.body);
            await photographyReservation.save();
            res.status(201).send(photographyReservation);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async createContactUs(req: Request, res: Response): Promise<void> {
        try {
            const photographyContactUs = new PhotographyContactUs(req.body);
            await photographyContactUs.save();
            res.status(201).send(photographyContactUs);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
