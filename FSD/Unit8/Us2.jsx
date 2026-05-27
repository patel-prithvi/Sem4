// create a program to build react app having buttons to increament and decrement a number bu clicking that respective button 
// also increment of number should be perform only if the no is less than 10 and decrement of number should be perform if the 
// number is greater than 0
import { useState } from "react";
function Us2(){
    const[count,setCount]=useState(0)

    function handlecount(){
        if (count<10){
            setCount(count+1)
        }
    }
    function handlecount2(){
        if(count>0){
            setCount(count-1)
        }
    }
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={handlecount}>Click here to increase</button>
            <button onClick={handlecount2}>Click here to decrease</button>
        </div>
    )
}
export default Us2