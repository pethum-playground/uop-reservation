import {Router} from "express";
import HanthanaGuideController from "../controllers/hanthanaGuideController";

const hanthanaGuideRoute: Router = Router();
const controller = new HanthanaGuideController();

hanthanaGuideRoute.post('/', controller.create);

export default hanthanaGuideRoute;
