
let expres=require("express");

let conn=require("./db.js");

let app=expres();

app.use(expres.json())

// importing database connection from db.js

app.post("/",(req,res)=>{

console.log(req.body)

let ins=req.body;

conn.query("INSERT INTO data (id,username,password,email) VALUES (?,?,?,?)", [ins.id, ins.username, ins.password, ins.email], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else{
      res.send(data);
    }


});
})
app.get("/login",(req,res)=>{
    conn.query("SELECT * FROM data",(err,data,feild)=>{
        console.log(data)
        res.send("getting")
    })
})
app.listen(4000,()=>{
    console.log("api running")
})