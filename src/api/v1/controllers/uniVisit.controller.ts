import {Request, Response} from "express";
import UniVisit from "../../../models/uni.visit";

export default class UniVisitController {

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const newVisitRequest = new UniVisit(req.body);
            await newVisitRequest.save();
            res.status(201).send(newVisitRequest);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async fetch(req: Request, res: Response): Promise<void> {
        const guides = await UniVisit.find();
        res.status(200).send(guides);
    }
}
