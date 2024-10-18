const express= require("mysql")
const conexion = express.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ventas'

})

conexion.connect((error)=>{

    if (error) {
        throw error
    } else {
        console.log("conexion exitosa")
    }
})