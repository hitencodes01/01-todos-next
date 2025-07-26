import todoData from "../../todos";
export async function GET() {
  return Response.json(todoData);
  // return new Response(JSON.stringify(todoData) , {
  //     headers : {
  //         "Content-Type" : "application/json",
  //     },
  // status : 210,
  // statusText : "fuck"
  // })
}
