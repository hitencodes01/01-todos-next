import todoData from "../../todos";
import {readFile ,writeFile} from "fs/promises"
import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";

export async function GET() {
  await connectDB()
  const allTodo = await Todo.find()
  console.log(allTodo)
  return Response.json(allTodo.map(({id,text,completed}) => ({id,text,completed})))
  // const stringifyData = await readFile('./todos.json' , "utf-8")
  // const data = await JSON.parse(stringifyData)
  // return Response.json(newTodo);
}


export async function POST(request){
  const todo = await request.json()
  // const newTodo = {
  //   id : crypto.randomUUID(),
  //   text : todo.text,
  //   completed : false
  // }
  const {id , text , completed} = await Todo.create({text : todo.text})

  // todoData.push(newTodo)
  // writeFile("todos.json", JSON.stringify(todoData , null , 2))
  return Response.json({id , text , completed} , {
    status : 201
  })
}
