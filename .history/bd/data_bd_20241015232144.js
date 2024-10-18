const express= require("mysql")
const conexion = express.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_crud'

})

conexion.connect((error)=>{

    if (error) {
        throw error
    } 
        console.log("conexion exitosa")
   
})