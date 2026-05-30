//create a react component that manages multiple form input field using a single state object and displays the values in real time
import { useState } from "react";
function Us8(){
    const[data,setdata]=useState({})
    function handlechange(e){
        const{name,value}=e.target;
        setdata({...data,[name]:value})
    }
    return(
        <div>
            FirstName: <input type="text" name="fname" onChange={handlechange}></input> <br></br>
            Last Name: <input type="text" name="lname" onChange={handlechange}></input><br></br>
            <h2>FirstName:{data.fname}</h2>
            <h2>LastName:{data.lname}</h2>
        </div>
    )
}
export default Us8