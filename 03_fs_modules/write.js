const fs=require("fs");
//.js
// fs.writeFileSync("t1.txt",);
//fs.writeFileSync("./text.txt","hey there i am using whatsapp");//synchronus call(blocking call ) top-to bottom
console.log("step1");
fs.writeFile("text.txt","hello jan",(err)=>{//Asynchronus non-blocking
    if(err) throw err;
//     console.log("step2");
//     console.log("step3");
// const data=fs.readFileSync("text.txt","utf-8");
// console.log("step 4");
// console.log(data);
fs.writeFileSync("t1.txt","hey there");
})
// fs.writeFile("t1.txt","hey there",(err)=>{
//     if(err) throw err;
// })
//fs.writeFileSync("t1.txt","hey there");
// console.log("step3");
// const data=fs.readFileSync("text.txt","utf-8");//synchronous call
// console.log("step 4");
// console.log(data);
console.log("step2");
fs.readFile("text.txt","utf-8",(err,data)=>{//Asynchronus call
    if(err) throw err;
    console.log(data);
    console.log("step3");
})
console.log("step4");
fs.cp("text.txt","t1.txt",(err)=>{
    if(err) throw err;
    fs.readFile("t1.txt","utf-8",(err,data)=>{//Asynchronus call
        if(err) throw err;
        console.log(data);
        console.log("step6");
    })
    fs.unlinkSync("t1.txt");
});
console.log("step5");
// fs.readFile("t1.txt","utf-8",(err,data)=>{//Asynchronus call
//     if(err) throw err;
//     console.log(data);
//     console.log("step6");
// })
console.log("step7");