import Todo from "@/models/todoModel";
// import todos from "../../../todos";
import {writeFile} from 'fs/promises'
import { connectDB } from "@/lib/connectDB";

// get code
export async function GET(_, { params }) {
  await connectDB()
  const { id } = await params;
  // const todo = todos.find((todo) => id === todo.id);
  const todo = await Todo.findById(id)
  if (!todo) {
    return Response.json(
      { error: "ToDo not found" },
      {
        status: 404,
      }
    );
  }
  return Response.json(todo);
}


// update todo code
export async function PUT(request , {params}){
  await connectDB()
  const editedTodoData = await request.json()
  const {id} = await params

  // const todoIndex = todos.findIndex((todo)=> id === todo.id)
  // const todo = todos[todoIndex]
  // if(editedTodoData.id){
  //   return Response.json({ error : "id change does not allowed here"})
  // }
  // const editedTodo = {...todo , ...editedTodoData}
  // todos[todoIndex] = editedTodo
  // writeFile('todos.json',JSON.stringify(todos,null,2))

  const editedTodo = await Todo.findByIdAndUpdate(id , editedTodoData , {
    new : true
  } )
  return Response.json(editedTodo,{
    status : 200
  })
}

// delete todo code
export async function DELETE(_,{params}){
  await connectDB()
  const {id} = await params

  // const todoIndex = todos.findIndex((todo) => id === todo.id)

  // if(!todoIndex){
  //   return Response.json({error : "this is does not exist"})
  // }
  // todos.splice(todoIndex , 1)
  // writeFile("todos.json" , JSON.stringify(todos , null , 2))

  await Todo.findByIdAndDelete(id)
return new Response(null , {
  status : 204
})
}