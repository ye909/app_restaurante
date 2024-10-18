const express = require("express")
const rauter=express.Router()


const conexion = require("./bd/data_bd")
const { error } = require("console")

rauter.get("/",(req,res)=> {

    conexion.query("SELECT * FROM usuario",(error, resutl)=>{
       if (error) {
        throw error
       } else {
        console.log(resutl)
       }

    } )
  })

// rauter(require("/","./app"))

module.exports = rauter