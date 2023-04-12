import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.on("add",(a,b)=>{
    console.log("Addition : "+(a+b));
});

eventEmitter.on("test",(callback)=>{
    console.log("Test event executed...");
    callback();
});


//eventEmitter.emit("add",20,10);
eventEmitter.emit("add",20,10);
eventEmitter.emit("test",()=>{
    console.log("Executed After Test Event..");
})