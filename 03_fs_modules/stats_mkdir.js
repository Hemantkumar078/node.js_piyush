const fs=require("fs");
console.log(fs.statSync("text.txt"));
console.log(fs.statSync("text.txt").isFile());
fs.mkdir('shubham/a/b',{recursive:true},(err)=>{
    if(err) throw err;
});
fs.rmSync("shubham",{recursive :true ,force : true });// here recursive  true delete all contents inside directory and directory and 
//force true here prevents for error handelling
fs.writeFileSync("l1.js","hey there");
fs.unlinkSync("l1.js");//to delete a single file