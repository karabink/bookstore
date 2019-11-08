import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Nikname:String,
    Country:String,
    Year:Number
});

const Author = mongoose.model("Author", authorSchema);

export default Author;