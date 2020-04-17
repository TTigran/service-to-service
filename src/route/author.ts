import express from 'express';
import authorRouter from '../controller/author'
const router = express.Router();

router.get("/", authorRouter.getAuthor);
router.get("/:id",authorRouter.getById);
router.post("/",authorRouter.addAuthor);

router.get("/app", (req,res) => {
  res.send("a:2");
})
export  default router;
