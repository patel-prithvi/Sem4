// write react js to create a digital clock running continuosly
import { useState, useEffect } from "react";
function UE2(){
    const [date, setDate]=useState(new Date())
    useEffect(()=>{{
        const timer=setInterval(()=>{
            setDate(new Date())
        },1000)
    }},[])
    return(
        <h1>Time:{date.toLocaleTimeString()}<br/><br/>
        Hour-{date.getHours()}
        :Min-{date.getHours()}
        :Sec:-{date.getSeconds()}
        </h1>
    )
}
export default UE2;