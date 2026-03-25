// write node js script to fetch values from url and display output 
// url="https://www.google.com/exam.txt?c1=Hello&c2=FSD2T1Test&c3=welcometoLJU#Allthebest"
// data must be returned as below in the file name exam.txt. File name must be fetched from url read content from file exam.txt 
// and send response to server display data in /page in same format as above but in h1 tag and in red color. If any other page is 
// requested it shows page not found in plain text

const http = require('http');
const fs = require('fs');

const urlString = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2T1Test&c3=welcometoLJU#Allthebest";
const myUrl = new URL(urlString);

// 1. Fetch Filename and Values
const filename = myUrl.pathname.split('/').pop(); // exam.txt
const c1 = myUrl.searchParams.get('c1');
const c2 = myUrl.searchParams.get('c2');
const c3 = myUrl.searchParams.get('c3');
const hash = myUrl.hash;

// 2. Format content and write to file
const fileContent = `${c1}!\nWelcome to LJU FSD2 T1 Test\n${hash}`;
fs.writeFileSync(filename, fileContent);

// 3. Create Server
http.createServer((req, res) => {
  if (req.url === '/page') {
    // Read from exam.txt
    const data = fs.readFileSync(filename, 'utf8');
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Display in h1 tag and red color
    res.end(`<h1 style="color: red; white-space: pre-line;">${data}</h1>`);
  } else {
    // Plain text for any other path
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('page not found');
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/page');
});
