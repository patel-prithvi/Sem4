// Write a function 'ArrayToObject' which takes in an array of arrays, 
// and returns an object with each pair of elements in the array as a key
// value pair and store the result in one arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output= { Country  : ' India ', State  : ' Gujarat ',  City  :  
// ‘Ahmedabad’ }

var inp = [['Country', 'India'],['State', 'Gujarat'],['City', 'Ahmedabad']]

var op = {}
for(i in inp){
    op[inp[i][0]] = inp[i][1]; 
}
var fs = require("fs")
fs.writeFileSync("PB767.txt",JSON.stringify(op))

console.log(op)