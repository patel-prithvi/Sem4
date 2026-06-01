// Write a program to build React app for task todo list. 
// •	Add 1 input field and button and by clicking on button display entered task 
// on the same page. 
// •	Also, add delete button with each added task to delete the task.  
import { useState } from "react";
function todo(){
    const [task,settask]=useState("")
    const[todolist,settodolist] = useState([])
    const addTask=()=>{
        settodolist([...todolist, {id:Date.now(), name:task}])
        settask("")
    }
    const deletetask=(id)=>{
        settodolist(
            todolist.filter((task)=>task.id!==id)
        )
    }
    return(
        <div>
            <h2>To-Do List</h2>
            <input type="text" value={task} onChange={(e) => settask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <ul>
                {todolist.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => deletetask(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default todo