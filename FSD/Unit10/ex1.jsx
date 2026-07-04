const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/ljku')
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

const person = new mg.model('person',mySchema)
const createDoc =async()=>{
    try{
        const persondata=new person({
            name:'Radha',
            surname:'Vyas',
            age:19,
            active: true,
        })
        const result=await persondata.save()
        console.log(result)
    }
    catch{
        console.log(err)
    }
}
createDoc()