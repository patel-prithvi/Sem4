import { useContext } from "react";
import { Num1,Num2 } from "./CO";
function CO3(){
    const n1=useContext(Num1)
    const n2=useContext(Num2)
    return(
        <h1>Mul of {n1} and {n2} is {n1*n2}</h1>
    )
}
export default CO3