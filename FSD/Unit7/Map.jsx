// create react components that contains an array of 1 to 10 multiply that by 5 using map
function M1(){
    const num=[1,2,3,4,5,6,7,8,9,10];
    return(
        <div>
            <h1>Map Example</h1>
            {num.map((n) => 
            <div>
                <h2>Updated num: {n*5}</h2>
            </div>)}
        </div>
    )
}
export default M1
