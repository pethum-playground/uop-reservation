import {Request, Response} from "express";
import UniVisitModel from "../../../models/uniVisit.model";

export default class UniVisitController {

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const newVisitRequest = new UniVisitModel(req.body);
            await newVisitRequest.save();
            res.status(201).send(newVisitRequest);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async fetch(req: Request, res: Response): Promise<void> {
        const guides = await UniVisitModel.find();
        res.status(200).send(guides);
    }
}
