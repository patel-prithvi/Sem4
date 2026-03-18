// write a node js to event module to simulate a sequece of events
// 1. when a connection events occurs print connection successfully and trigger data recieved events 
// 2. when data received event occurs print data received successfully
// 3. finally print thanks at the end of execution

const eventemitter= require("events");
const ee = new eventemitter();

ee.on('connection',()=>{
    console.log("connection successfully");
    ee.emit('received')
})

ee.on('received',()=>{
    console.log("data received ");
})
ee.emit('connection')
console.log('thanks');
