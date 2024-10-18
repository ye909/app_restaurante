const express = require("express")
const rauter=express.Router()



rauter.get("/",(req,res)=> {
    res.send("hola")
  })

// rauter(require("/","./app"))

module.exports = rauter