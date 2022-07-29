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

app.use(express.json());
 app.use(cors());

 app.get('/saleposts/log', async (req, res)=>{
   const sqlSelect = "select * from sales";
     db.query(sqlSelect, (err, result)=>{
        res.send(result)
       console.log(err)
    })
})

app.post("/api/register",(req, res)=>{
    const {name, username, pwd, email, phone ,dob} = req.body;
    const hashedPassword = encrypt(pwd)
    db.query("insert into accounts (fullname, username, pwd,iv, email, phone, dob, admin) values (?, ?, ?,?, ?, ?, ?, ?)", [name, username, hashedPassword.password, hashedPassword.iv, email, phone, dob, "n"], (err, result)=>{
        res.send(result)
        console.log(err)
    })
})
app.post("/api/login", (req, res)=>{
    const {username, password} = req.body
    hashpwd = decrypt(password)
    db.query("select * from accounts where (username = ? OR email = ? OR phone = ?) AND pwd = ? AND iv = ?", [...username, hashpwd.password, hashpwd.iv], (err, result)=>{ 
    res.send(hashpwd)    
    })
})
app.listen(3001, ()=>{
    console.log("server is running...")
});