import mongoose from "mongoose";

const Todo = mongoose.models.Todo || mongoose.model("Todo" ,{
    text : {
        type : String ,
        required : true,
    },
    completed : {
        type : Boolean ,
        required : true ,
        default : false
    }
})

export default Todo