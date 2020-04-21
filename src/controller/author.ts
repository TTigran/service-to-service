import {Request,Response} from "express"
import service from '../service/author'

const getAuthor = async (req:Request, res:Response): Promise<void> => {
    try {
        const data  = await service.getAuthorData();
        res.status(200).json(data);
    }catch (e) {
        res.status(500).json({error:e.message})
    }
};

const addAuthor = async (req:Request, res:Response): Promise<void> => {
    try {
        const addedData =  await service.createAuthor(req.body);
        res.status(201).json(addedData)
    }catch (e) {
        res.status(500).json({error:e.message})
    }
};

const getById = async (req:Request, res:Response) : Promise<void> => {
    try {
        const recipientData = await service.sendTargetAuthor(req.params.id);
        res.status(200).json(recipientData);
    }catch (e) {
        res.status(500).json({error:e.message})
    }
};

export default {
  addAuthor, getAuthor, getById
}
