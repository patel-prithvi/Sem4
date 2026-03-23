// 1. registering multiple event listener for diff events(myevent1, myevent2)
// 2. removing the specific event listener for myevent2
// 3. removing all listeners associated with event1
// 4. triggering events and observing which listeners execute

const ee= require("events");
var e= new ee();

var fun1= (msg)=> {
    console.log("Message from fun1 "+msg);
};
var fun2= (msg)=> {
    console.log("Message from fun2 "+msg);
}

e.on("myevent1", fun1)
e.on("myevent1", fun2)
e.on("myevent2", fun1)
e.on("myevent2", fun2)
e.removeListener("myevent2", fun2);
e.removeAllListeners("myevent1")
e.emit("myevent1", "LJ")
e.emit("myevent2", "D3")