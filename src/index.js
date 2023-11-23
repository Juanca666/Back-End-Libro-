// Importando Express
const express = require ('express');
const cors = require ('cors');

// Constante para nuestro express
const app = express ();

// Config
app.set ('port', process.env.PORT || 8080);

app.use(cors());
// Para que nuestra servidor pueda leer json
app.use(express.json());

// Rutas
app.use(require('./routes/users_routes'));

// declarando el puerto y la escucha del mismo. (Inicializo El Servidor)
app.listen(app.get('port'), () => {
    console.log('JuancaBastidas on port', app.get('port'));
});

