const express = require("express")
const rauter=express.Router()


const conexion = require("./bd/data_bd")

rauter.get("/",(req,res)=> {
    conexion.query("SELECT * FROM usuario")
  })

// rauter(require("/","./app"))

module.exports = rauter