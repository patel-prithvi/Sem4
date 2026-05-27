// write a prgm to build react app having a button which increase count by 1 while clicking on it
import { useState } from "react";
function Us1(){
    const[count,setCount]=useState(0)

    function handlecount(){
        setCount(count+1)
    }
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={handlecount}>Click here</button>
        </div>
    )
}
export default Us1
