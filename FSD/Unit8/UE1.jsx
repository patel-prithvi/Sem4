// write react js application to perform the following task 
// Add 2 buttons and increment count by 1 with each clip display alert as an effect on specified conditions 
// 1.effect will be trigerred only when page rendered for the first time(emtpt array)
// 2.effect will be trigerred every time the button A is clicked(array with value)
// 3.when the page is renderd for the first time and on every update event trigger
import { useState, useEffect } from "react";
function UE1(){
    const [count,setCount]=useState(0)
    const [calculation,setCal]=useState(0)
    useEffect(()=>{
        alert('Clicked one')
    },[])
    useEffect(()=>{
        alert('Button a clicked')
    },[count])
    useEffect(()=>{
        alert('Clicked on every update')
    })
    const changecount=()=>{setCount(count+1)}
    const changecalc=()=>{setCal(calculation+1)}
    return (
        <div>
            <button onClick={changecount}>Button A {count}</button>
            <br></br>
            <button onClick={changecalc}>Button B {calculation} </button>
        </div>
    );
}
export default UE1;
