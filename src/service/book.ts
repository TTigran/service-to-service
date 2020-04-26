import { getModel } from '../db';
import * as m from '../../@types/import/module';
import '../../env';
import { Book } from '../../@types/model/Book';
import { mapDefined } from 'tslint/lib/utils';
import { isNumber } from 'util';
import { IAuthor, IBook } from '../model';

const {Node} = m.importModule('zeronode');
const zeroAddress: string = process.env.ZERO_ADDRESS;
const zeroEvent: string = process.env.ZERO_EVENT;

(async function () {
    const model = await getModel();

    const node = new Node({
        id: 'recipient',
        bind: zeroAddress,
        options: { layer: 'recipient' },
    });

    await node.bind();

    node.onRequest(zeroEvent, async ({body, reply}: { body: any, reply: any }) => {
        console.log(body);
        // TODO: VAHAN, fix the code, must return the real id not the count++.
        // Why you use Promise.all in this case, you can get the bookData and authorData and after that merge them.
        // Don't do this kind of data processes in zeronode request. It can be broken when I request second time.
        const list: any = [];
        let count: number = 0;
        await Promise.all(body.map(async (author: IAuthor, index: number) => {
            const bookData = await model.Book.find({ authorID: author.id });
            const bookNames = await bookData.map((item: IBook) => {
                return item.bookName;
            });
            list.push({
                id: count++,
                author: author.name,
                bookNames
            });
        }));
        reply(list);
    });

}());


const getBookData = async (): Promise<IBook[]> => {
    try {
        const model = await getModel();
        const bookData = await model.Book.find();
        return bookData;
    } catch (e) {
        console.error(e.message);
    }
};

const createBook = async (body: Book): Promise<IBook> => {
    const model = await getModel();
    const addedData = await model.Book.create(body);
    return addedData;
};


export { getBookData, createBook };

