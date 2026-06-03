//use multiple context in react application by creating and consuming them across different components
//parent.jsx create a context for css styling and provides it to ch1.jsx
//ch2.jsx create a context for a string value students and provides it to ch2
//ch3.jsx:consumes both context and display a message with provided styles and string 
import { createContext } from "react";
import Ch1 from './Ch1'
const CC=createContext();
const mycss={
    backgroundColor: 'yellow',
    color: 'red',
    fontSize:'45px'
}   

function Parent(){
    return(
        <>
            <CC.Provider value={mycss}>
                <Ch1/>
            </CC.Provider>
        </>
    )
}
export default Parent
export {CC}