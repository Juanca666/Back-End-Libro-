const express = require('express');
const router = express.Router();

// Declarando la conexion de la Bd
const mysqlConnection = require ('../configuration/db.config');

// Ruta para Agregar usuarios
router.post('/', (req, res) => {
    const { Id,Id_Rol,Nombre_Completo,Email,Usuario,Clave } = req.body;
    const query = `
        CALL usuariosAddorEdit (?,?,?,?,?,?);
    `;
    mysqlConnection.query (query, [Id,Id_Rol,Nombre_Completo,Email,Usuario, Clave ], (err,rows,fields) => {
        if (!err) {
            res.json({Status:'Usuario Agregado'})
        } else {
            console.log(err);
        }
        
    });
        
});