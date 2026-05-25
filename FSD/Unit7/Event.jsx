// Create a component to perform the tasks as described below: 
// 1. Add a text field and a submit button. - While changing the value in the text field, 
// display it below the form. - Display this text field value in an alert box upon submitting it. 
// 2. Add a button to perform click and double-click event tasks. - On click event, display message 
// in h3 tag “You clicked once”. - On double-click event, display message in h3 tag “You clicked twice”. 
// - Message should be displayed below the button. 
function Map1() { 
    const arr=[1,2,3,4,5]; 
    function handleSubmit (e) { 
        e.preventDefault (); 
        alert (document.getElementById('uname').value); 
    } 
    function handleclick(){ 
        document.getElementById('test1').innerHTML = "You clicked once" 
    } 
    function handledoubleclick(){ 
        document.getElementById('test1').innerHTML = "You clicked twice" 
    } 
    function handleChange(event) { 
        document.getElementById('test').innerHTML =event.target.value; 
    } 
    return ( 
    <div>
        <form onSubmit = {handleSubmit}> 
            <input type="text" id="uname" onChange={handleChange}></input> 
            <input type="submit"/> 
        </form> 
        <h1 id="test">On change event</h1> 

        <button style={{backgroundColor:'black',padding:"20px",color:"white"}} 
        onClick={handleclick} onDoubleClick={handledoubleclick}>Click</button> 
        <h1 id="test1">Click/DoubleClick event</h1> 
    </div> 
    ) 
} 

export default Map1