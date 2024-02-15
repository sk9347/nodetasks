const express = require("express");
const app = express();
const Localstorage = require("node-localstorage").LocalStorage;
const local = new Localstorage("./storage");

app.use(express.json());

//ASSIGNMENT 2
app.post("/register", (req, res) => {
  const data = JSON.parse(local.getItem("store"));

  const { username, password } = req.body;

  const validation = data.find(
    (val) => val.username == username && val.password == password
  );

  if (!validation) {
    data.push(req.body);

    local.setItem("store", JSON.stringify(data, null, 2));

    res.send("registration succesfull");
  } else {
    res.send("user details already existed");
  }
});



// ASSIGNMENT 3
app.post("/login",(req,res)=>{
    const data=JSON.parse(local.getItem('store'))
    const {username,password}=req.body
    const validation=data.find((val)=>val.username==username && val.password==password)

    if(validation){
        res.send("sucsessfull")
    }else{
        res.send("invalid details")
    }
})


//ASSIGNMENT 1
app.get("/users", (req, res) => {
  // const {username,password}=req.body

  const store = JSON.parse(local.getItem("store"));

  store.push(req.body);

  console.log(store);

  local.setItem("store", JSON.stringify(store, null, 2));

  const users = JSON.parse(local.getItem("store"));

  res.send(users);
});





app.listen(3020, () => {
  console.log("running");
});
