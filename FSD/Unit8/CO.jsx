// write react programm to perform the following task 
// create 1 main file CO.jsx and other 3 component file CO1.jsx, CO2.jsx and CO3.jsx pass num1 and num2 from CO.jsx to CO3.jsx.
// calculate multipication of that number using UseContext
import { createContext } from "react";
import CO1 from './CO1'
const Num1=createContext();
const Num2=createContext();
const n1=20
const n2=10
function CO(){
    return(
        <>
            <Num1.Provider value={n1}>
            <Num2.Provider value={n2}>
            <CO1/>
            </Num2.Provider>
            </Num1.Provider>
        </>
    )
}
export default CO
export {Num1,Num2}