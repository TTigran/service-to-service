import mongoose , { Schema, Document }  from "mongoose"

export interface IAuthor extends Document {
    id: number;
    name: string;
    book:Array<string>;
}

const Author:Schema = new mongoose.Schema({
    id: {
        type: Number,
        required:true,
        unique:true},
    name: {
        type: String,
        required:true},
    book:{
        type: Array,
        required:true
    }
});

export const AuthorModel = mongoose.model<IAuthor>('Author', Author);



