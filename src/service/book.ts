import {Request,Response} from "express"
import {getModel} from "../db";
import  * as m from "../../@types/import/module"
import "../../env"
import {Book} from "../../@types/model/Book";

const { Node } = m.importModule("zeronode");
const  zeroAddress = process.env.ZERO_ADDRESS;
const  zeroEvent = process.env.ZERO_EVENT;

(async function() {
    const model =await getModel()

    const node  = new Node({
        id: "recipient",
        bind:zeroAddress,
        options: {layer: "recipient"}
    });

    await node.bind();

    node.onRequest(zeroEvent, async ({body,reply} : {body:any,reply:any}) =>{
        const filterBook = body[0]["book"];
        const bookData = await model.Book.find({title:{$in:filterBook}});
        reply(bookData)
    });

}());


const getBookData = async (): Promise<Array<Book>> => {
  try {
      const model = await getModel();
      const bookData =  await model.Book.find()
      return bookData
  }catch (e) {
      console.error(e.message)
  }
};

const createBook = async (body: Book): Promise<Book> => {
    const model = await getModel();
    const addedData = await model.Book.create(body);
    return addedData;
};


export default { getBookData,createBook}

