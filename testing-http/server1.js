import http from "http";

// 1000 client request reached to server
/*
   case -1 
     client send the request to the server
     server process the request
     send response to the client

     Complete life cycle of request-response

    case - 2
     client send the request to the server
     Server receive the request
     Server Didn;t send response to client
     
     Request-response cycle is incomplete (request is left hanging)

     end() :- to end the request-response life cycle.
*/
const server = http.createServer((request,response)=>{
   console.log("Request Rececived By the Server");
   response.write("Hello Client . I am Node Application Server");
   response.end();
});

server.listen(3000,()=>{
    console.log("server started...");
});

