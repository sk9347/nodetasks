let expres=require("express")
let axios=require("axios")
let cors=require("cors")
let app=expres()

app.use(expres.json())
app.use(cors())

app.get("/",(req,res)=>{
    
axios.get("https://fakestoreapi.com/products")
.then(re=>{

      res.send(re.data)
})
.catch(err=>{
    console.log(err)
    res.status(500).send("erro acured")
})
    

})
app.listen(3009,()=>{
    console.log("run")
})