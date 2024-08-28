const fs=require('fs');  //FS full form is File Sync

let text=fs.readFileSync("tr64.txt" , "utf-8",);

console.log('console of the file is here');   //u can write one consol log , this is only for style purpose 
console.log("console of the file is here",text);

fs.writeFileSync("Aman.txt",text);