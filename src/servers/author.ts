import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import authorRouter from '../route/author';

import '../../env';

const app  = express();
const port = process.env.AUTHOR_PORT || 8000;


app.use(bodyParser.json());
app.use( 'author', authorRouter );

app.get('/', (req: Request, res: Response) => {
    res.send(`welcom to Author-Service typescript-node project on port ${port}`);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;
