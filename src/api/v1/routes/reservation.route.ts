import {Router} from "express";
import ReservationController from "../controllers/reservation.controller";

const reservationRoute: Router = Router();
const controller = new ReservationController();

reservationRoute.post('/', controller.create);

export default reservationRoute;
