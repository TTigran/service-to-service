import express from "express";
import bodyParser from "body-parser"
import authorRouter  from './route/author';
import bookRouter  from './route/book';
import "../env"

const app = express();
const port = process.env.NODE_PORT

app.use(bodyParser.json());
app.use('/author', authorRouter);
app.use("/book", bookRouter);
app.get( "/", ( req, res ) => {
  res.send("welcom to typescript-node project");
});


app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );
