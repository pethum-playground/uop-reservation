import {Router} from "express";
import hanthanaGuideRoute from "./routes/hanthanaGuide.route";
import uniVisitRoute from "./routes/uniVisit.route";
import photographyRoute from "./routes/photography.route";
import galBangollowRoute from "./routes/galBangollow.route";

const appRouter: Router = Router();

appRouter.use("/hanthana-guide", hanthanaGuideRoute);
appRouter.use("/uni-visit", uniVisitRoute);
appRouter.use("/photography-reservation", photographyRoute);
appRouter.use("/galbangollow-reservation", galBangollowRoute);

export default appRouter;
