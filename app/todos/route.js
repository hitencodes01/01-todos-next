import todoData from "../../todos"
console.log(todoData)
export async function GET(){
    // return Response.json({message : "Hello World"})
    return new Response(JSON.stringify(todoData) , {
        headers : {
            "Content-Type" : "application/json",
        },
        // status : 210,
        // statusText : "fuck"
    })
}