import express, {Request, Response} from "express";
import {Express} from "express";
import bodyParser from "body-parser"
import authorRouter from '../route/author';

import "../../env"

const app  = express();
const port: number = 8000
const generateApp = async (app: Express, port: number, middlewareRoute: any) => {
    app.use(bodyParser.json());
    app.use( middlewareRoute.path, middlewareRoute.module );
    app.get("/", (req: Request, res: Response) => {
        res.send(`welcom to Author-Service typescript-node project on port ${port}`);
    });
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
}

(async function run() {
    await generateApp(app,  port  ,{path:"/author",module:authorRouter});
})()


export default app;
