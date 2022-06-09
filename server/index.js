const express = require("express")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "kurdshop"
});

app.get('/', (req, res)=>{
   const sqlSelect = "select * from sales";
   db.query(sqlSelect, (err, result)=>{
       res.send(result);
   })
})

app.listen(3001, ()=>{
    console.log("running")
});