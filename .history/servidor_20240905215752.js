const express = require("express")
const app = express()



app.set(3000,()=>{
console.log("http://:localhost:3000")
})



app.get("/",(res,req)=> {
    res.send("Hello World")
})