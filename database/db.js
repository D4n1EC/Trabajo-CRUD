const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('EL error de conexion es: '+error);
        return
    }
    console.log('¡Conectado a la BD MySQL');
})

module.exports = conexion;
