const express = require("express")
const cors = require("cors")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "kurdshop"
});

app.use(cors());
const corsOption = {
    origin: "http://localhost:3000"
};

app.get('/saleposts/log',cors(corsOption), async (req, res)=>{
   const sqlSelect = "select * from sales";
    db.query(sqlSelect, (err, result)=>{
        res.send(result);

   })
})

app.get('/api/register', cors(corsOption), async (req, res)=>{
    const insert = `insert into sales (username) values ${req}`
    db.query(insert, (err, result)=>{
        res.send(result)
    })
})

app.listen(3001, ()=>{
    console.log("running")
});