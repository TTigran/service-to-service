import mongoose from "mongoose";

const schema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
        unique: true
      },
      description: {
        type: String,
      }
});

const Book = mongoose.model('Book',schema);
export default Book  ;

