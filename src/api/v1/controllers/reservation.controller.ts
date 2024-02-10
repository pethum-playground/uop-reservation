import {Request, Response} from "express";
import User from "../../../models/user.model";

export default class ReservationController {

  public async create(req: Request, res: Response): Promise<void> {
      const newUser = new User(req.body);
      await newUser.save();

      res.status(201).send({id: newUser.id, username: newUser.username, email: newUser.email});
  }
}
