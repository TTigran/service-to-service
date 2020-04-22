import {getModel}   from '../db';
import mongodb from 'mongodb';
import ObjectID = mongodb.ObjectID
import  * as m from "../../@types/import/module"
import "../../env"
import {Author} from "../../@types/model/Author";


const { Node } = m.importModule("zeronode");
const  zeroAddress: string = process.env.ZERO_ADDRESS;
const  zeroEvent: string = process.env.ZERO_EVENT;

const getAuthorData = async (): Promise<Array<Author>>  => {
 try {
   const model = await getModel();
   const data = await model.Author.find();
   return data;
 }catch (e) {
   console.error(e.message);
 }

};

const createAuthor = async (body: Author): Promise<Author> => {
 try {
   const model = await getModel();
   const addedData = await model.Author.create(body);
   return addedData;
 }catch (e) {
   console.error(e.message);
 }
};

const getAuthorById = async (id:string): Promise<any> => {
  const model = await getModel();
  const  dataById = await  model.Author.find({id:id});

  const node = new Node({
    id: 'sender',
    options: {layer:"sender"},
  });

  await node.connect({ address: zeroAddress });

  const recipientData  = await node.request({
    to:"recipient",
    event:zeroEvent,
    data:dataById
  })

  return recipientData;
}




export default {
  createAuthor, getAuthorData ,getAuthorById
}
