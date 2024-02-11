import {Router} from "express";
import UniVisitController from "../controllers/uniVisit.controller";

const uniVisitRoute: Router = Router();
const controller = new UniVisitController();

uniVisitRoute.post('/', controller.create);
uniVisitRoute.get('/', controller.fetch);

export default uniVisitRoute;
