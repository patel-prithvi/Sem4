//create react app which contains form with following fields 1.name 2.email 3.password 4.confirm pass 5.message (textarea)
//6.gender(radio) 7.city(dropdown) display submitted value in an alert box 

import {useState} from "react"

function Us12(){

    const [formdata,setformdata] = useState({})
    function handlechange(event){
        const {name,value} = event.target
        setformdata({
            ...formdata,
            [name] : value
        })
    }

    function handlesubmit(e){
        e.preventDefault()
        alert(
            "Form Submitted Successfully\n\nName: "
            + formdata.name
            + "\nEmail: "
            + formdata.email
        )
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
                Name:
                <input type="text" name="name" onChange={handlechange}/>
                <br /><br />
                Email Id:
                <input type="email" name="email" onChange={handlechange}/>
                <br /><br />
                Password:
                <input type="password" name="pass" onChange={handlechange}/>
                <br /><br />
                Confirm Password:
                <input type="password" name="cpass" onChange={handlechange}/>
                <br /><br />
                
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )

}

export default Us12