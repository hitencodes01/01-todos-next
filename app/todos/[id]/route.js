import { error } from "console";
import todos from "../../../todos";
import {writeFile} from 'fs/promises'

// get code
export async function GET(_, { params }) {
  const { id } = await params;
  const todo = todos.find((todo) => id === todo.id);
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
  const editedTodoData = await request.json()
  console.log(editedTodoData)
  const {id} = await params
  const todoIndex = todos.findIndex((todo)=> id === todo.id)
  const todo = todos[todoIndex]
  if(editedTodoData.id){
    return Response.json({error : "id change does not allowed here"})
  }
  const editedTodo = {...todo , ...editedTodoData}
  todos[todoIndex] = editedTodo
  writeFile('todos.json',JSON.stringify(todos,null,2))
  return Response.json(editedTodo)
}