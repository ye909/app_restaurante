const express = require("express")
const rauter=require.Rauter()



rauter.get("/",(req,res)=> {
    res.send("hola")
  })

// rauter(require("/","./app"))