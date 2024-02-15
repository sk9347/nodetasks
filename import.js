let a = require("http");
let b = require("url");
let c = require("fs")

a.createServer((req, res) => {


  let r = b.parse(req.url, true);
  // console.log(req.method)


  if (r.pathname == "/login" && req.method=="GET") {
    // res.write("respons successfull");
    // c.appendFile("./login.html",q,(err,data)=>{
      // c.readFile("./login.html",(err,data)=>{
      //   res.write(data);
      //   res.end()
      // })
      var body=""
      let ar=[]

      req.on("data",(chunk)=>{
        body+=chunk.toString();
       
      })

      req.on("end",()=>{

      // console.log(JSON.parse(body));
      
        // const {name} = body
      let j=JSON.parse(body)
      ar.push(j)
      console.log(ar)
      


      c.writeFile("./nod.json",body,(data,err)=>{
            
        res.write("login");
        res.end();

      })
      })



       
        res.write("login");
        res.end();
    // })

    // res.write(JSON.stringify([{"name":"saitej","age":10}]))
    // res.end();

  } else if(r.pathname=="/register"){

       res.write("register");
       res.end();
    // res.write(JSON.stringify([{name:"sai",age:30}]));
    // res.end();
  }else{
    res.write("error");
    res.end();
  }

}).listen(3020, () => {
  console.log("running");
});
