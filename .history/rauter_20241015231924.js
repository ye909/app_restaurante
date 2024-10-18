const express = require("express")
const rauter=express.Router()


const conexion = require("./bd/data_bd")

rauter.get("/",(req,res)=> {
    res.send(conexion)
  })

// rauter(require("/","./app"))

module.exports = rauter