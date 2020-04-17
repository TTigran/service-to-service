import express from 'express';
import bookRouter from "../controller/book"
const router = express.Router();

router.get("/",bookRouter.getBooks);
router.post("/",bookRouter.addBook);

export  default router;
