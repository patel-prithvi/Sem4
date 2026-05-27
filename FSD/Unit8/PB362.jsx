// Write a program to build React app to perform the tasks as asked below.
// •	Add a button “Change Text”.
// •	Add “Hello” text in h2 tag.
// •	By clicking on “Change text” button text should be changed to “How are 
// you?” and vice versa. 
import { useState } from "react";
function PB(){
    const [text, setText]= useState("Hello")
    
    function showText(){
        if(text=="Hello"){
            setText('How are you?')
        }
        else{
            setText('Hello')
        }
    }
    return(
        <div>
            <button onClick={showText}>Change Text</button>
            <h2>{text}</h2>
        </div>
    )
}
export default PB