// write a program to build a react app having a button wnich changes img by clicking on it
import { useState } from "react";
import img1 from './assets/hero.png'
import img2 from './assets/pr.jpg'
function Us6(){
    const [img, setimg]= useState(img1)
    function showing(){
        if(img==img1){
            setimg(img2)
        }
        else{
            setimg(img1)
        }
    }
    return(
        <div>
            <button onClick={showing}>change</button>
            <br></br>
            <br></br>
            <img src={img}/>
        </div>
    )
}
export default Us6
