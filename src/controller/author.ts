import { Request, Response, NextFunction } from 'express';
import { getAllAuthor, getAuthorById, getAuthorData, createAuthor } from '../service';

const getAuthor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data  = await getAuthorData();
        res.status(200).json(data);
    }catch (e) {
        next(e);
    }
};
const getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data  = await getAllAuthor();
        res.status(200).json(data);
    }catch (e) {
        next(e);
    }
};
const addAuthor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(req.body);

    try {
        const addedData =  await createAuthor(req.body);
        res.status(201).json(addedData);
    }catch (e) {
        next(e);
    }
};

const getById = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const i = req.params.id;
    try {
        const recipientData = await getAuthorById(i);
        res.status(200).json(recipientData);
    }catch (e) {
        next(e);
    }
};

export {
  addAuthor,
  getAuthor,
  getById,
  getAll
};
