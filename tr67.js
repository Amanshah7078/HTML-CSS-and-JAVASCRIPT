const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=5500;
const server=http.createServer((req,res)=>{
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Welcome to this page Coders May you achieve all JS in mind and not get confused to perform higher task together and ping with clients!');
  res.end();
}).listen (5500);   //use this for fast port generate

