import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";
import { getLoggedInUser } from "@/lib/auth";


// get code
export async function GET(_, { params }) {
  await connectDB()
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;
  const { id } = await params;
  const todo = await Todo.findOne({_id : id , userID : user.id})
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
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;
  const editedTodo = await Todo.updateOne({_id : id , userID : user.id} , editedTodoData , {
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
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;
  await Todo.deleteOne({_id : id , userID : user.id} )
return new Response(null , {
  status : 204
})
}