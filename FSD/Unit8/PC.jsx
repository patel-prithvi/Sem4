// write react js programm to perform following tak 
// create 1 file named PC.jsx and other 2 component file C1.jsx and C2.jsx. Pass firstname and lastname from PC.jsx to C2.jsx file and
// display 'welcome firstname lastname' in browser
import { createContext } from "react";
import C1 from './C1'
const Fname=createContext();
const Lname=createContext();

function PC(){
    return(
        <>
            <Fname.Provider value='Zalak'>
            <Lname.Provider value='Bhatt'>
            <C1/>
            </Lname.Provider>
            </Fname.Provider>
        </>
    )
}
export default PC
export {Fname,Lname}