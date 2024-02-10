import {Request, Response} from "express";
import HanthanaGuide from "../../../models/hanthana-guide";

export default class HanthanaGuideController {

  public async create(req: Request, res: Response): Promise<void> {
      const newGuide = new HanthanaGuide(req.body);
      await newGuide.save();
      res.status(201).send(newGuide);
  }

  public async fetch(req: Request, res: Response): Promise<void> {
      const guides = await HanthanaGuide.find();
      res.status(200).send(guides);
  }
}
