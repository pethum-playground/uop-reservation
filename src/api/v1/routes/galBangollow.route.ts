import {Router} from "express";
import GalBangollowController from "../controllers/bangollow.controller";

const galBangollowRoute: Router = Router();
const controller = new GalBangollowController();

galBangollowRoute.post('/', controller.createRequest);
galBangollowRoute.post('/contact-us', controller.createContactUs);

export default galBangollowRoute;
