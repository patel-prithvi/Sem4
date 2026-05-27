// write a program to build react app having button intially button text should be hide while clicking on it button text
// should be change to show and text react js hooks will not be shown and vice-versa
import { useState } from "react";
function Us5(){
    const [hidetext, setHide]= useState("React JS Hoocks")
    const[buttontext, setButtonText] = useState("hide")
    function showHide(){
        if(buttontext=="hide"){
            setButtonText('show')
            setHide('')
        }
        else{
            setButtonText('hide')
            setHide('React JS Hoocks')
        }
    }
    return(
        <div>
            <button onClick={showHide}>{buttontext}</button>
            <h2>{hidetext}</h2>
        </div>
    )
}
export default Us5