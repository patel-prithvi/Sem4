// write node script to create 2 listeners for a common events print number of events associated with the emitter. 
// remove one of the listeners then call remaining listeners again. also print number of remaining listeners, 
// then remove all  listeners and count listeners again. 

const ee= require("events");
var e= new ee();

var list1= (msg)=> {
    console.log("Message from fun1 "+msg);
};
var list2= (msg)=> {
    console.log("Message from fun2 "+msg);
}

e.on("common", list1)
e.on("common", list2)
e.emit("common", "LJ")
console.log(e.listenerCount('common'))
e.removeListener('common',list2)
console.log(e.listenerCount('common'))
e.removeAllListeners('common')
console.log(e.listenerCount('common'))
