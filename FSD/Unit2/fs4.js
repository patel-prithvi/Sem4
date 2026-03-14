// write node js sync to write an array of obj with properties cricketer's name and their their number in a file named player.txt then read
// the file and print data on console 
const fs = require('fs');

const players = [
    { name: 'Virat Kohli', number: 18 },
    { name: 'Rohit Sharma', number: 45 },
    { name: 'MS Dhoni', number: 7 }
];


fs.writeFileSync("player.txt", JSON.stringify(players, null, 2));
const fileData = fs.readFileSync("player.txt", 'utf8');
    
console.log(fileData);
