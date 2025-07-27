import todoData from "../../todos";
import {writeFile} from "fs/promises"
export async function GET() {
  return Response.json(todoData);
}
export async function POST(request){
  const todo = await request.json()
  const newTodo = {
    id : crypto.randomUUID(),
    text : todo.text,
    completed : false
  }
  todoData.push(newTodo)
  writeFile("todos.json", JSON.stringify(todoData , null , 2))
  return Response.json(newTodo , {
    status : 201
  })
}
