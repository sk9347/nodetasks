let expres=require("express")
let fs=require("fs")
let app=expres();

app.get("/",(req,res)=>{

fs.readFile("./login.html","utf-8",(err,data)=>{

    res.send(data)

})

    
})

app.listen(3040,()=>{
    console.log("run")
})