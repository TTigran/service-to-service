import mongoose from "mongoose"

export const AuthorSchema = new mongoose.Schema({
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





