import todoData from "../../todos";
import {readFile ,writeFile} from "fs/promises"
import mongoose from "mongoose";
import { connectDB } from "@/lib/connectDB";

export async function GET() {
  connectDB()
  const result = await mongoose.connection.db.collection("todos").insertOne({ title: "Learn Node.js", completed: false })
  console.log(result)
  const stringifyData = await readFile('./todos.json' , "utf-8")
  const data = await JSON.parse(stringifyData)
  return Response.json(data);
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
