import {Request, Response} from "express";
import HanthanaGuideModel from "../../../models/hanthana.guide.model";

export default class HanthanaGuideController {

  public async create(req: Request, res: Response): Promise<void> {
      const newGuide = new HanthanaGuideModel(req.body);
      await newGuide.save();
      res.status(201).send(newGuide);
  }

  public async fetch(req: Request, res: Response): Promise<void> {
      const guides = await HanthanaGuideModel.find();
      res.status(200).send(guides);
  }
}
