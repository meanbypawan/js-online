import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.on("data",()=>{
     console.log("data event catched...");
});

eventEmitter.addListener("error",()=>{
    console.log("error event catched....");
});

eventEmitter.once("onlyonce",()=>{
   console.log("only onced event catched...");
});

eventEmitter.emit("onlyonce");
eventEmitter.emit("error");
eventEmitter.emit("error");

eventEmitter.removeAllListeners("error");
eventEmitter.emit("error");

// eventEmitter.emit("data");
// eventEmitter.emit("data");
// eventEmitter.emit("data");