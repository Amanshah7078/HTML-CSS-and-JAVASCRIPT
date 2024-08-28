const fs=require("fs");
 fs.readFile("tr64.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a message for the term of text tr64.js");