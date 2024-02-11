import {Router} from "express";
import PhotographyController from "../controllers/photography.controller";

const photographyRoute: Router = Router();
const controller = new PhotographyController();

photographyRoute.post('/', controller.createRequest);
photographyRoute.post('/contact-us', controller.createContactUs);

export default photographyRoute;
