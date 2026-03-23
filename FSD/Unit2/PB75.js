// Write a Node.Js program for following action
// 1.Write a file having five random elements separated by white 
// space in .txt file.
// 2.append sorted array of these 5 elements in same file along with 
// message : “Sorted array:” in new line.
// 3.Find maximum number from that and append with message 
// “maximum number=” in same file. 

const fs = require('fs');
var nums = [23, 10, 45, 5, 88];
var str = "";
for (var n of nums) {
    str += n + " ";
}
fs.writeFileSync("data.txt", str);
nums.sort((a, b) => a - b);
fs.appendFileSync("data.txt", "\nSorted array: " + nums.join(","));
var maxNum = nums[nums.length - 1];
fs.appendFileSync("data.txt", "\nmaximum number=" + maxNum);
console.log("File saved successfully!");

// ch1 - 5m
// ch2 - 10m fs, path, events, sync asyn setTimeout setInterval
// ch3 - 10m url, http
