import express     from 'express';
import bookRouter  from '../controller/book.mjs';

const router = express.Router();

router.get("/",bookRouter.getBooks);
router.get("/:id",bookRouter.getBooks);
router.post("/analise",bookRouter.getBooksAnalise);

export default router;

