// write node js script and json to perform below task
// 1. write following object {d:{a:10, b:20, c:[30,10]}} in txt file named f2.txt
// 2. read data from the same file and perform
// 2.1. addtion of a and below
// 2.2. subtraction od f second element of c and b (must be a positive value)
// 2.3. multiplication of elements of c
// 3. add the output of addition, subtraction and multiplication in file f2.txt 
// in sync
var fs= require("fs");

const dataObj = { d: { a: 10, b: 20, c: [30, 10] } };

fs.writeFileSync("f2.txt", JSON.stringify(dataObj));
console.log("File f2.txt created.");

const fileContent = fs.readFileSync("f2.txt", 'utf-8');
const parsedData = JSON.parse(fileContent).d;

const addition = parsedData.a + parsedData.b;

const sub = Math.abs(parsedData.c[0] - parsedData.b);

const mult = parsedData.c[0] * parsedData.c[1];

const outputString = '\nAddition: '+addition+' \nSubtraction: '+sub+'\nMultiplication: '+mult;

fs.appendFileSync("f2.txt", outputString);

console.log("Tasks performed and appended to f2.txt");
console.log("Results:", { addition, sub, mult });
