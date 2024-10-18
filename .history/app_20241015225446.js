const express = require("express")
const app = express()

app.set("view engine","ejs")

app.get("/",(res,req)=> {
    res.send("Hello World")
})
app.listen(3000,()=>{
console.log("http://:localhost:3000")
})

// 
// app.use(require("/","./rauter"))


