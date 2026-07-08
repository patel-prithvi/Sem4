const mg= require('mongoose')
const validator = require('validator')
mg.connect('mongodb://127.0.0.1:27017/db2')
.then(()=>{console.log('success')})
.catch((err)=>{console.log(err)})
const userSchema=new mg.Schema({
    email:{type:String, 
        required:true,
        unique: true,
        validate:[validator.isEmail, 'Enter valid email']
    },
    product:
    {
        type:String,
        required: true,
        validate:[validator.isAlphanumeric, 'This is not valid']
    }
})

const user= mg.model('user', userSchema)

const createDoc= async()=>{
    try{
        const newuser=new user({
            email:'z@gmail.com',
            product:'zx12'
        })
        const result=await newuser.save()
        console.log(result)
    }
    catch (err) {
        console.error(err);
    }
}
createDoc()