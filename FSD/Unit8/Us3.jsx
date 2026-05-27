// write a program to build react app having button by clicking on modify this text button text should be change to updated
// text and vice-versa
import { useState } from "react";
function Us3(){
    const[Name,setName]=useState('Modify this text')

    function changeName(){
        if (Name == 'Modify this text'){
            setName('Updated text')
        }
        else{
            setName('Modify this text')
        }
    }
    
    return(
        <div>
            <button onClick={changeName}>{Name}</button>
        </div>
    )
}
export default Us3