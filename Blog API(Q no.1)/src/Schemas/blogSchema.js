import { Schema } from "mongoose";

const blogSchema = Schema({
    title : {
        type : String,
        required : [true, "Title field is required"]
    },
    description : {
        type : String,
        required : [true, "Description field is required"]
    },
    category : {
        type : String,
        required : [true, "Category field is required"]
    }
},
{
    timestamps : true
});

export default blogSchema;