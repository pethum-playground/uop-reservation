import {Router} from "express";
import reservationRoute from "./routes/reservation.route";

const appRouter: Router = Router();

appRouter.use("/reservation", reservationRoute);

export default appRouter;
