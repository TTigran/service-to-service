import express from 'express';
import { addAuthor, getAll, getAuthor, getById } from '../controller/author';
const bookRouter = express.Router();

bookRouter.get('/', getAuthor);
bookRouter.get('/tobook/', getAll);
bookRouter.get('/:id', getById);
bookRouter.post('/', addAuthor);

export  default bookRouter;
