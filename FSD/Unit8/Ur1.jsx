// Write react component to increase value by 5 while clicking on button. Initialize value with 20. Use usereducer to perform the task
import { useReducer} from "react";
function reducer(state,action){
    return state+action
}
function Ur1(){
    // const [state, dispatch]= useReducer(reducerFunction, initialvalue)
    const [state, dispatch]= useReducer(reducer, 20)
    return(
        <div align='center'>
            <h1>{state}</h1>
            <button onClick={()=> dispatch(5)}>Add</button>
        </div>
    )
}
export default Ur1