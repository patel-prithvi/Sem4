import { createContext } from "react";
import Ch3 from './Ch3';

const Student = createContext();

function Ch2() {
    const name= 'Prithvi'
    return(
        <>
            <Student.Provider value={name}>
                <Ch3/>
            </Student.Provider>
        </>
    );
}

export default Ch2;
export { Student };
