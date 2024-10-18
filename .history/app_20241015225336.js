const express = require("express")
const app = express()



app.listen(3000,()=>{
console.log("http://:localhost:3000")
})

// app.set("view engine","ejs")
// app.use(require("/","./rauter"))


// app.get("/",(res,req)=> {
//     res.send("Hello World")
// })