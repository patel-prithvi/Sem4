// Create a react application using props to pass an object from 1 componant to another component 
// 1. create a parent component
// 2. create an object named details containting student name and university name
// 3. pass the detail object to child component Pro2.jsx using props 
// 4. in child component receive object using props and display student name and university name in browser
import Pro2 from './Pro2'; // Importing the child component

function ParentComponent() {
    const details = {
        name: "Me",
        university: "Can't Say"
    };

    return (
        <div >
            <Pro2 details={details} />
        </div>
    );
    }

export default ParentComponent;
