const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/faulty')
.then(()=>{console.log('success')})
.catch((err)=>{console.log(err)})

mg.pluralize(null)
const mySchema=new mg.Schema({
    name:{type:String, required:true},
    surname:String,
    age:Number,
    active: Boolean,
    date: {type: Date, default:new Date().toLocaleDateString()}
})

const faulty = new mg.model('faulty',mySchema)
const createDoc =async()=>{
    try{
        const faultydata=[{
            name:'Zalak',
            surname:'Bhatt',
            age:32,
            active: true,
        },
        {
            name:'x',
            surname:'y',
            age:33,
            active: true,
        }]
        const result=await faulty.insertMany(faultydata)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
createDoc()