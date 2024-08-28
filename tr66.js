

const http=require('http');
const fs=require('fs');
const fileContent=fs.readFileSync('tr57.html')
const server=http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
res.end(fileContent)
});
server.listen(80,'127.0.0.1',()=>{
console.log("Listening on port 80");
})


const calculator=require('./calc');
let a=5;
let b=10;

console.log("the calculation the the no. is"+calculator.add(a,b));




const calculator=require('calc');
let x=40, y=10;

console.log("the addition of 40 and the no. is"
    + calculator.add(x,y));
console.log("the subtration of the another no.is"+calculator.sub(x,y));
console.log('The multiplication of the another no. is'+calculator.multiply(x,y));