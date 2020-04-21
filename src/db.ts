import {connect, model} from "mongoose"
import {
    AuthorSchema,
    BookSchema
} from "./model"
import "../env"

const mongoUrl = process.env.MONGODB_URL || "mongodb://localhost:27017";
const database = process.env.MONGODB_DATABASE || "mydb";
const mongoArgs = process.env.MONGODB_ARGS;

export const  getModel = async () => {
    const connectionsString = [mongoUrl,database].join("/");
    try {
        await connect(connectionsString,{useNewUrlParser:true});
        const Author = model("Author",AuthorSchema,"Author");
        const Book = model("Book", BookSchema,"Book");
        return {Author, Book }
    }catch (e) {
        console.error(e.message);
    }
}
