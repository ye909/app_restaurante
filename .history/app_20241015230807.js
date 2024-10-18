const express = require("express")
const app = express()

app.set("view engine","ejs")

app.use(require("./rauter"))

app.listen(3000,()=>{
console.log(" ser http://localhost:3000")
})

// 
// app.use(require("/","./rauter"))


