import express from "express";

import './config/db';
import appRouter from "./api/v1/app.route";
import cors from "cors";

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.express.use(express.json());
        this.express.use(cors());

        this.express.get("/healthz", (req: any, res: { send: (arg0: string) => any; }) => res.send("API up and running"));

        this.setAppRoutes();
    }

    private setAppRoutes(): void {
        this.express.use("/api/v1", appRouter);
    }
}

export default new App().express;
