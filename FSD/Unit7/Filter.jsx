// create react components that contains an array of 1 to 10 filter even number by using filter
function F1(){
    const num=[1,2,3,4,5,6,7,8,9,10];
    return(
        <div>
            <h1>Filter Example</h1>
            <h2>
                {num.filter(n => n % 2 == 0).join(", ")}
            </h2>
            
        </div>
    )
}
export default F1
