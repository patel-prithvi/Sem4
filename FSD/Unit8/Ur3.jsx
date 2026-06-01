// PB 386 Create a React app:
// • Display product quantity
// • Add buttons “Add Item” and “Remove Item”
// • Quantity should never go below 0
// • Use useReducer to manage state
import { useReducer} from "react";
function reducer(state,action){
    if(action.type==='increment')
        return state+1
    if(action.type==='decrement')
        if(state>0)
            return state-1
        return 0
}
function Ur3(){
    const [state, dispatch]= useReducer(reducer, 10)
    return(
        <div align='center'>
            <h1>Product name: {state}</h1>
            <button onClick={()=> dispatch({type:'increment'})}>Add Item</button>
            <button onClick={()=> dispatch({type:'decrement'})}>Remove Item</button>
        </div>
    )
}
export default Ur3