import {getModel}   from '../db';
import mongodb from 'mongodb';
import ObjectID = mongodb.ObjectID
import  * as m from "../../@types/import/module"
import "../../env"
import Author from "../../@types/model/Author";

const { Node } = m.importModule("zeronode");
const  zeroAddress = process.env.ZERO_ADDRESS;
const  zeroEvent = process.env.ZERO_EVENT;

const getAuthorData = async (): Promise<Author>  => {
 try {
   const model = await getModel();
   const data: Author = <Author> <unknown> await model.Author.find();
   return data;
 }catch (e) {
   console.error(e.message);
 }

};

const createAuthor = async (body: Author): Promise<Author> => {
 try {
   const model = await getModel();
   const addedData: Author = <Author> <unknown> await model.Author.create(body);
   return addedData;
 }catch (e) {
   console.error(e.message);
 }
};

const getAuthorById = async (id:string): Promise<Author> => {
  const model = await getModel();
  if (!ObjectID.isValid(id)) {
    console.error(`No record  given  to  Id: ${id}`);
  }
  try {
    const  dataById: Author = <Author> <unknown> await  model.Author.find({_id:id});
    return dataById;
  }catch (e) {
    console.error(e.message)
  }

}


const sendTargetAuthor = async (id:string): Promise<Author> => {
  const dataById = await getAuthorById(id);

  let node = new Node({
    id: 'sender',
    options: {layer:"sender"},
  });

  await node.connect({ address: zeroAddress });

  let recipientData  =await node.request({
    to:"recipient",
    event:zeroEvent,
    data:dataById
  })

  return recipientData;
};

export default {
  createAuthor, getAuthorData, sendTargetAuthor,
}
