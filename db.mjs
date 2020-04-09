import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/mydb';

mongoose.connect(url,(err)=>{
    try{
        console.log("MongoDB connection succeseed");
    }catch (err) {
        console.log(err.message)
    }
});

export default mongoose;
