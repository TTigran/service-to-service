import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { bookRouter } from '../route/book';
import '../../env';

const app  = express();
const port = process.env.BOOK_PORT || 8001;


app.use(bodyParser.json());
app.use( 'book', bookRouter );

app.get('/', (req: Request, res: Response) => {
    res.send(`welcom to Author-Service typescript-node project on port ${port}`);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;
