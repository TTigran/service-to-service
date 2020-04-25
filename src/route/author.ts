import express from "express";
import authorRouter from "../controller/author"
const router = express.Router();

router.get("/", authorRouter.getAuthor);
router.get("/tobook/", authorRouter.getAll);
router.get("/:id",authorRouter.getById);
router.post("/",authorRouter.addAuthor);

export  default router;
