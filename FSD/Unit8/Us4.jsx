// write a programm to build react app having a heading LJ University in red color by clicking on change color button
// change color of text in blue vice-versa
import { useState } from "react";
function Us4(){
    const[color,setColor]=useState('red')

    function changeColor(){
        if (color == 'red'){
            setColor('blue')
        }
        else{
            setColor('red')
        }
    }
    
    return(
        <div>
            <h1 style={{color:color}}>LJ University</h1>
            <button onClick={changeColor}>change color</button>
        </div>
    )
}
export default Us4