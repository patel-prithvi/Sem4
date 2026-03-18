const eventemitter= require("events");
const ee = new eventemitter();

ee.on('start',(start,end)=>{
    console.log(`Student from ${start} to ${end}`);
})
ee.emit('start',1,100)