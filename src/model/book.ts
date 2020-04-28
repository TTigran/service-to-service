import { Schema, Document, model } from 'mongoose';

export interface IBook extends Document{
    bookName: string;
    authorID: number;
}

 const Book: Schema = new Schema({
      bookName: [{
        type: String,
        required: true,
        unique: true
      }],
      authorID: Number
});

export const BookModel = model<IBook>('Book', Book);



