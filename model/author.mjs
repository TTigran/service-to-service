import mongoose from 'mongoose';

const schema = new mongoose.Schema({
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

const Author = mongoose.model('Author', schema);

export default  Author ;

