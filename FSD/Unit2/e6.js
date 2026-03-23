// write node js scipt to handle events 
// 1. check the radius is -ve or not if -ve then display radius must be +ve
// 2. check the side is -ve or not if -ve then display radius must be +ve

const ee= require("events");
var e= new ee();

e.on("nradius", ()=>{
    console.log("radius must be positive");
})
e.on("nside", ()=>{
    console.log("side must be positive");
})

e.on("findval", (r,s)=>{
    if(r<0){
        e.emit("nradius");
    }
    else{
        cperi = 2*3.14*r;
        console.log(cperi);
    }
    if(s<0){
        e.emit("nside");
    }
    else{
        speri = 4*s;
        console.log(speri);
    }  
})
e.emit("findval",-10,-3)
e.emit("findval",10,3)