
// let http=require("http");
// let ur=require("url")
// let f=require("fs")

// http.createServer((req,res)=>{

//     let r=ur.parse(req.url,true);
     
//     let {hel}=r.query
//     console.log(typeof hel)
    

//     if(r.pathname=="/login"){
//     console.log(r.pathname)
//     f.readFile("./login.html",(err,data)=>{
//         // console.log(data)
//         res.write("hloe");
//         res.end()
//     })
    
//     }else{
//     // console.log(r.pathname)
//     f.appendFile("./reg.html","hello",(err,data)=>{
    
//     res.write("error 404")
//     res.end()
//     })
    
//     }
// })
// .listen(3002,()=>{
//     console.log("run")
// })

