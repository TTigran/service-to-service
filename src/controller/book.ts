import { Request, Response, NextFunction } from 'express';
import { createBook, getBookData } from '../service';

const getBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const bookData = await getBookData();
        res.status(200).json(bookData);
    } catch (err) {
        next(err);
    }
};

const addBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const addedData =  await createBook(req.body);
        res.status(201).json(addedData);
    } catch (err) {
        next(err);
    }
};


export { 
    getBooks,
    addBook
};
