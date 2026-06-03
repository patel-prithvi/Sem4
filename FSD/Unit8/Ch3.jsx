import { useContext } from "react";
import { CC } from "./Parent";
import { Student } from "./Ch2"; 

function Ch3() {
    const textStyle = useContext(CC);
    const st = useContext(Student);

    return (
        <div>
            <h1 style={textStyle}>Welcome, {st}!</h1>
        </div>
    );
}

export default Ch3;
