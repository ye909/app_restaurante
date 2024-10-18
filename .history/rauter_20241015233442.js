const express = require("express")
const rauter=express.Router()


const conexion = require("./bd/data_bd")


rauter.get("/",(req,res)=> {

    
    // conexion.query("SELECT * FROM usuarios" ,(error, resutls)=>{
    //    if (error) {
    //     throw error
    //    } else {
    //     res.send(resutls)
    //    }

    // } )
  })

// rauter(require("/","./app"))

module.exports = rauter