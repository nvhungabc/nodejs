const http=require("http");
const port=8080;
http
.createServer((req,res)=>{
    console.log("url",req.url);
    console.log("method",req.method);
    if(req.url==="/"){
        res.end(`<h1>Hello</h1>`)
    }
    if(req.url==="/contact"){
        res.end(`<h1>Nguyen Van Hung</h1>`)
    }
    
})
.listen(port,()=>{
    console.log(`Ứng dụng ${port}`);
});