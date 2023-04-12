/*
  Stream:-
   ReadStream (Large File)

   readFile() (Small File)

   data.txt---> readFile()---> loaddata in Buffer
   ---> read From Buffer 

   ReadStream and WriteStream
   Emit the events Behind the scene.
  ----------------------------------------------
 */
import events from "events";

let eventEmitter = new events.EventEmitter();

eventEmitter.on("data",()=>{
    console.log("data event catched....");
});

eventEmitter.on("click",()=>{
    console.log("Click event catched....");
});

eventEmitter.emit("data");
eventEmitter.emit("data");
eventEmitter.emit("data");
eventEmitter.emit("click");

//console.log(events);
















