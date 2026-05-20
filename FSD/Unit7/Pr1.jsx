// Create a react application using props to display student details. 
// 1. Create a parent component P1.jsx
// 2. Pass the following data to child component p2.jsx using props data. student name, rollno, marks
// 3. In child component, dipaly students details and inc marks by 1 and display updated marks
import P2 from './Pr2.jsx'
function P1(){
    return(
        <div>
            <P2 name='Arjun' roll='11' marks={20}/>
            <P2 name='Arjun2' roll='12' marks={22}/>
            <P2 name='Arjun3' roll='13' marks={23}/>
        </div>
    )
}
export default P1