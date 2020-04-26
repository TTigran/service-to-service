import { connect} from 'mongoose';
import {
    AuthorModel,
    BookModel
} from './model';
import '../env';

const mongoUrl: string = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const database: string = process.env.MONGODB_DATABASE || 'mydb';


export const  getModel = async () => {
    const connectionsString = [mongoUrl, database].join('/');
    try {
        await connect(connectionsString, { useNewUrlParser: true, useUnifiedTopology: true });
        const Author = AuthorModel;
        const Book = BookModel;
        return {Author, Book };
    }catch (e) {
        console.error(e.message);
    }
};
