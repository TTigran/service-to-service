import mongoose,{Schema,Document} from "mongoose"

export interface IBook extends Document{
    title:string,
    description:string
}

 const Book: Schema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
        unique: true
      },
      description: {
        type: String,
      }
});

export const BookModel = mongoose.model<IBook>('Book', Book);



