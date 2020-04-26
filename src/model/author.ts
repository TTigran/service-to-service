import { Schema, Document, model }  from 'mongoose';

export interface IAuthor extends Document {
    id: number;
    name: string;

}

const Author: Schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: String

});

export const AuthorModel = model<IAuthor>('Author', Author);



