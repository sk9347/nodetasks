const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tez9347",
    database: "users"
});
conn.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:");
        return;
    }
    console.log("Connected to the database");
});

module.exports = conn;
