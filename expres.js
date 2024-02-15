const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

app.post("/", (req, res) => { 
  fs.readFile("./nod.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }

    const file = JSON.parse(data);

    const validation = file.find(
      (item) =>
        item.username === req.body.username &&
        item.password === req.body.password
    );

    if (!validation) {
      file.push(req.body);

      fs.writeFile("./nod.json", JSON.stringify(file, null, 2), (err) => {
        if (err) {
          return res.status(500).send("Internal Server Error");
        }
        res.send("Data added successfully");
      });
    } else {
      res.send("Data already exists");
    }
  });
});

app.get("/login", (req, res) => { 
  fs.readFile("./nod.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }

    let file = JSON.parse(data);

    let { username, password } = req.body;

    let validation = file.find((val) => val.username === username && val.password === password); // Fix the condition

    if (validation) {
      res.send("Success");
    } else {
      res.send("Please enter valid details");
    }
  });
});

app.listen(3005, () => {
  console.log("Server running on port 3005");
});
