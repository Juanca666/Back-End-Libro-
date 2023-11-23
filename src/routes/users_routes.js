const express = require('express');
const router = express.Router();

// Declarando la conexion de la Bd
const mysqlConnection = require ('../configuration/db.config');

// Ruta para buscar usuarios
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuarios', (err,rows,fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Ruta para Buscar usuario X 
router.get('/:Id', (req, res) => {
    const { Id } = req.params;
    mysqlConnection.query('SELECT * FROM usuarios WHERE Id = ? ', [Id], (err,rows,fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


// Ruta para Buscar usuarios
router.post('/', (req, res) => {
    const { Id,Id_Rol,Nombre_Completo,Email,Usuario,Clave } = req.body;
    const query = `
        CALL usuariosAddorEdit (?,?,?,?,?,?);
    `;
    mysqlConnection.query (query, [Id, Id_Rol,Nombre_Completo,Email,Usuario, Clave ], (err,rows,fields) => {
        if (!err) {
            res.json({Status:'Usuario Agregado'})
        } else {
            console.log(err);
        }
        
    });
        
});

// Ruta para Actualizar usuarios
router.put ('/:Id', (req, res) => {
    const { Id_Rol,Nombre_Completo,Email,Usuario,Clave  } = req.body;
    const { Id } = req.params;
    const query = 'CALL usuariosAddorEdit (?,?,?,?,?)';
    
    mysqlConnection.query(query, [Id,Id_Rol,,Nombre_Completo,Email,Usuario,Clave], (err,rows,fields) =>{
      if (!err) {
        res.json({Status: 'Usuario Actualizado'});
     } else {
        console.log(err);
     }

    });

});

// Ruta para Eliminar usuarios
router.delete('/:Id', (req, res) => {
    const { Id } = req.params;
    mysqlConnection.query('DELETE FROM usuarios WHERE Id = ?', [Id], (err,rows,fields) => {
        if (!err) {
            res.json({Status:'Usuario Eliminado'});
        } else {
            console.log(err);
        }

    });

});




module.exports = router;