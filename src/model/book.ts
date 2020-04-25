import mongoose,{Schema,Document} from "mongoose"

export interface IBook extends Document{
    bookName:string,
    authorID:number
}

 const Book: Schema = new mongoose.Schema({
      bookName: {
        type: String,
        required: true,
        unique: true
      },
      authorID: {
        type: Number
      }
});

export const BookModel = mongoose.model<IBook>('Book', Book);



