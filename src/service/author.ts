import  * as m from '../../@types/import/module';
import { Author } from '../../@types/model/Author';
import { getModel }   from '../db';

import '../../env';


const { Node } = m.importModule('zeronode');
const  zeroAddress: string = process.env.ZERO_ADDRESS;
const  zeroEvent: string = process.env.ZERO_EVENT;

const getAuthorData = async (): Promise<Author[]>  => {
 try {
   const model = await getModel();
   return await model.Author.find();
 }catch (e) {
   console.error(e.message);
 }
};
const getAllAuthor = async (): Promise<Author[]>  => {
 try {
   const model = await getModel();
   const data = await model.Author.find();
     const node = new Node({
         id: 'sender',
         options: {layer: 'sender'},
     });

     await node.connect({ address: zeroAddress });

     return await node.request({
         to: 'recipient',
         event: zeroEvent,
         data,
     });
 }catch (e) {
   console.error(e.message);
 }
};
const createAuthor = async (body: Author): Promise<Author> => {
 try {
   const model = await getModel();
   return await model.Author.create(body);

 }catch (e) {
   console.error(e.message);
 }
};

const getAuthorById = async (id: string): Promise<any> => {
  const model = await getModel();
  const  dataById = await  model.Author.find({ id });

  const node = new Node({
    id: 'sender',
    options: {layer: 'sender'},
  });

  await node.connect({ address: zeroAddress });

  return await node.request({
    to: 'recipient',
    event: zeroEvent,
    data: dataById
  });
};




export {
  createAuthor, getAuthorData , getAuthorById, getAllAuthor
};
