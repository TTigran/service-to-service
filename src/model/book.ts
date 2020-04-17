import mongoose from "mongoose"

export const BookSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
        unique: true
      },
      description: {
        type: String,
      }
});





