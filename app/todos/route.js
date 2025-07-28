import todoData from "../../todos";
import {readFile ,writeFile} from "fs/promises"
import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";

export async function GET() {
  await connectDB()
  // const result = await Todo.find()
  // console.log(result)
  const newTodo = await Todo.create({
    text : "learn mongodb"
  })
  console.log(newTodo)
  console.log("first")
  console.log("first")
  console.log("second")
  const stringifyData = await readFile('./todos.json' , "utf-8")
  const data = await JSON.parse(stringifyData)
  return Response.json(newTodo);
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
