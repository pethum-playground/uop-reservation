import {Router} from "express";
import hanthanaGuideRoute from "./routes/hanthanaGuideRoute";

const appRouter: Router = Router();

appRouter.use("/hanthana-guide", hanthanaGuideRoute);

export default appRouter;
