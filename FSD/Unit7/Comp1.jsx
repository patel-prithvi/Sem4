// write react code to reder a component with the following data 
// 1. heading in italic in the blue color and font size 25px 
// 2. an ordered list of 3 flowers that start with the letter A. list should be in red background color

function Comp1(){
    return(
        <div>
            <h1 style={{ color: 'blue', fontStyle: 'italic', fontSize: '25px' }}>Flowers</h1>

            <ol type="A" style={{ backgroundColor: 'red' }}>
                <li>Rose</li>
                <li>Lili</li>
                <li>Aster</li>
            </ol>
        </div>
    )
}
export default Comp1