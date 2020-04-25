import mongoose , { Schema, Document }  from "mongoose"

export interface IAuthor extends Document {
    id: number;
    name: string;

}

const Author:Schema = new mongoose.Schema({
    id: {
        type: Number,
        required:true,
        unique:true},
    name: {
        type: String,
        required:true},

});

export const AuthorModel = mongoose.model<IAuthor>('Author', Author);



