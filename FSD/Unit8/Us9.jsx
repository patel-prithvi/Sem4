import { useState } from "react";
function Us9(){
    const[name,setname]=useState({})
    function handlesubmit(event){
        event.preventDefault()
        alert(`You entered: ${name}`)
    }
    return(
        <form onSubmit={handlesubmit}>
            <textarea type="text" value={name} onChange={(e)=> setname(e.target.value)}></textarea>
            <input type="submit"/>
        </form>
    )
}
export default Us9