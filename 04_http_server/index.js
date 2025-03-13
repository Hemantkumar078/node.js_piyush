const http=require("http");
const fs=require("fs");
const url=require("url");
const myServer=http.createServer((req,res)=>{
    // console.log(req.headers);
    // console.log(req);
    console.log("request recieved");
    const log=`${Date.now()} : ${req.url} new req recieved\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        if(err) throw err;
        //console.log(data);
        switch(req.url){// to get the request that user asking for like '/' home page and other pages
            case '/': res.end("Home page");
            break;
            case '/about' : res.end("I am hemant"); 
            break;
            default:
                res.end("404 not found");
        }//this switch uses to multiple page request sending 
        //res.end("hey jnata kaise ho sab log hello 1");
        // responding to our request
    })// responding to our request
})
myServer.listen(3000,()=>{console.log("our server started")});
//use nodemon index.js to auotomatically restart and run server for saved changes
