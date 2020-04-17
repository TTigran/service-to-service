import {Request,Response} from "express"
import {getModel} from "../db";
import  * as m from "../../module"
import "../../env"

const { Node } = m.importModule('zeronode');
const  zeroAddress = process.env.ZERO_ADDRESS;
const  zeroEvent = process.env.ZERO_EVENT;

(async function() {
    const model =await getModel()

    const node  = new Node({
        id: 'recipient',
        bind:zeroAddress,
        options: {layer: 'recipient'}
    });

    await node.bind();

    node.onRequest(zeroEvent, async (data:any)=>{
        const filterBook = data.body[0]['book'];
        const bookData = await model.Book.find({title:{$in:filterBook}});
        data.reply(bookData)
    });
}());


const getBooks = async (req:Request, res:Response) => {
    const model = await getModel();
    const bookData = await model.Book.find()
    res.status(200).json(bookData);
};

const addBook = async (req:Request, res:Response):Promise<void> => {
    const model = await getModel();
    const addedData =  await model.Book.create(req.body);
    res.status(201).json(addedData)
};


export default { getBooks,addBook}
