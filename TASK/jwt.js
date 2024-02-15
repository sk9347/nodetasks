let express=require('express')
let jwt=require('jsonwebtoken')
let bcrypt=require('bcrypt')

let app=express()

app.use(express.json())

const secrete='key'

const saltrounds=5;

app.get('/',(req,res)=>{
  let pas;
    const pass=req.body.password;

bcrypt.hash(pass,saltrounds,(err,hash)=>{
    console.log(hash)
//to decrypt the password it will return true or false result
   bcrypt.compare(pass,hash,(errs,data)=>{
    if(errs){
        console.log("rdd")
    }else{
        console.log(data)
    }
})
   })
    
    res.send(('hello'))









 
// const data=req.body;

// const token=jwt.sign(data,secrete,{expiresIn:"1hr"})
// console.log(token)
// jwt.verify(token,secrete,(err,decode)=>{
//     if(err){
//         console.log("err")
//     }else{
//         console.log(decode)
//     }
// })
//     res.send(`${token}`)
})
app.listen(3020,()=>{
    console.log("running")
})