//Importamos el Modulo de MySQL
const mysql = require('mysql');
const cors = require ('cors')


//Configuracion Base de Datos
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1928',
    database: 'club'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('Bd Conectada');
    }
});

module.exports = mysqlConnection;