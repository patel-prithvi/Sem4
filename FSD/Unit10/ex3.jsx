const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/company')
.then(()=>{console.log('success')})
.catch((err)=>{console.log(err)})

mg.pluralize(null)
const mySchema=new mg.Schema({
    name:{type:String, required:true},
    age:Number,
    active: Boolean
})

const employee = new mg.model('employee',mySchema)
const createDoc =async()=>{
    try{
        // const emp1=new employee({
        //     name:'Shyam',
        //     age:23,
        //     active: true,
        // })
        // const emp2=new employee({
        //     name:'Mira',
        //     age:20,
        //     active: true,
        // })
        // const result=await employee.insertMany([emp1,emp2])
        // console.log(result)
        // update age 25 and active false where name= shyam id document is not available instert new document
        // const result = await employee.updateOne({name:'Shyam'},{$set:{age:25,active:false}}, {upsert:true})
        // update age 30 and name radha by using _id
        const result= await employee.findOne({name:'Radha'})
        // const updateperson=await employee.findByIdAndUpdate(result._id,{name:'Radha',age:10},{new:true})
        // console.log(updateperson)
        // delete person by using _id
        const deleteperson=await employee.findByIdAndDelete(result._id)
        console.log(deleteperson)
    }
    catch(err){
        console.log(err)
    }
}
createDoc()
