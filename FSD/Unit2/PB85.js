// write a node js script to create file named test.txt containing the initial text "Exam attempt" then it should add 3 more lines to the file
// Entry 1: Pass
// Entry 2: Fail
// Entry 3: Pass
// after writing the program must read the file and count how many times the word pass appears and if the word pass appear 3 or more times 
// the program should erase the content inside test.txt
const { count } = require('console');
const fs = require('fs');
fs.writeFileSync('test.txt', "Exam attempt")
fs.appendFileSync("test.txt", "\nEntry 1: Pass \n Entry 2: Fail \n Entry 3: Pass ")
data= fs.readFileSync("test.txt","utf-8")
console.log(data)
parts= data.split("Pass")
counts= parts.length - 1;
console.log(counts);
if (counts>=3){
    fs.writeFileSync('test.txt'," ")
    console.log("File content erased");
}
else{
    console.log("File content intact");
}
