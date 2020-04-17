import {getModel}   from '../db';
import mongodb from 'mongodb';
import {Request,Response} from "express"
import ObjectID = mongodb.ObjectID
import  * as m from "../../module"
import "../../env"

const { Node } = m.importModule('zeronode');
const  zeroAddress = process.env.ZERO_ADDRESS;
const  zeroEvent = process.env.ZERO_EVENT;

const getAuthor = async (req:Request, res:Response) => {
  const model = await getModel();
  const data  = await model.Author.find();
  res.status(200).json(data);
};

const addAuthor = async (req:Request, res:Response):Promise<void> => {
  const model = await getModel();
  const addedData =  await model.Author.create(req.body);
  res.status(201).json(addedData)
};

const getById =async (req:Request, res:Response) => {
  const model = await getModel();
  if (!ObjectID.isValid(req.params.id)) {
     res.status(400).send('No record  given  to  Id:' + `${req.params.id}`)
  }
  const dataById =  await  model.Author.find({_id:req.params.id});

  let node = new Node({
    id: 'sender',
    options: {layer:"sender"},
  });

  await node.connect({ address: zeroAddress });

  let data  =await node.request({
    to:"recipient",
    event:zeroEvent,
    data:dataById
  })
  res.status(200).json(data);
};

export default {
  addAuthor, getAuthor, getById
}
