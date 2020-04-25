import express, {Request, Response} from "express";
import {Express} from "express";
import bodyParser from "body-parser"
import bookRouter from '../route/book';
import "../../env"

const app  = express();
const port: number = 8001

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
    await generateApp(app,  port  ,{ path:"/book",module: bookRouter });
})()

export default app;
