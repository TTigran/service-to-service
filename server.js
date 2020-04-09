import express         from 'express';
import cookieParser    from 'cookie-parser';
import logger          from 'morgan';
import bodyParser      from 'body-parser';
import errorMiddleware from './midleware/error.mjs';
import authorRouter    from './routes/author.mjs';
import bookRouter      from './routes/book.mjs';
import db from "./db.mjs"
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json())
app.use('/author', authorRouter);
app.use("/book", bookRouter)
app.use(errorMiddleware.notFound);
app.use(errorMiddleware.internalServer);

app.listen(4000, function () {
  console.log("Server run on 3000")
});

export default app;
