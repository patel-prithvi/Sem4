// build a react component for calculator that perform basic arithmetic operation using sing state object 
// 1. 2 number inputs
// 2. and dropdown to select operations add, sub, mul, div all fields are required on form submits validate all fields. prevent divide by 0 
// show result using aleart box 
import { useState } from "react";
function calculator(){
    const[form, setform]=useState({})
    function handlechange(e){
        const name= e.target.name;
        const value= e.target.value;
        setform({...form, [name]:value})
    }
    function calculate(e){
        e.preventDefault()
        const a= parseInt(form.n1)
        const b= parseInt(form.num2)
        let result;
        if(form.op==='add'){
            result=a+b
        }
        else if(form.op==='sub'){
            result=a-b
        }
        else if(form.op==='mul'){
            result=a*b
        }
        else if(form.op==='div'){
            if(b==0){
                alert('cannot divide by zero')
            }
            else{
                result=a/b
            }
        }
        else{
            alert('invalid')
        }
        alert(`Result: ${result}`)
    }
    return(
        <div>
            <form onSubmit={calculate}>
       
                <input type="number" name="n1" min="0" value={form.n1} onChange={handlechange} required/>
                <br /><br />
             
                <input type="number" name="num2" value={form.num2} onChange={handlechange}/>
                <br /><br />
                Operation:
                <select name="op" onChange={handlechange} required>
                    <option value="">-- Select Operation --</option>
                    <option value="add">Add (+)</option>
                    <option value="sub">Subtract (-)</option>
                    <option value="mul">Multiply (*)</option>
                    <option value="div">Divide (/)</option>
                </select>
                <br /><br />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default calculator