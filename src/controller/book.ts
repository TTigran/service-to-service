import {Request,Response} from "express"
import service from "../service/book"

const getBooks = async (req:Request, res:Response): Promise<void> => {
    const bookData = await service.getBookData()
    res.status(200).json(bookData);
};

const addBook = async (req:Request, res:Response): Promise<void> => {
    const addedData =  await service.createBook(req.body)
    res.status(201).json(addedData)
};


export default { getBooks,addBook}
