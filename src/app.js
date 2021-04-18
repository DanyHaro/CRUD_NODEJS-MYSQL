const express = require('express');
const path = require('path'); //este modulo se encarga de unir directorios
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

const app = express();

//IMPORTANDO RUTAS
const compradoRoutes = require('./routes/comprador');





//CONFIGURACION
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')) //nos da la direccion de app.js y le concatenamos la carpeta "views"

//Middelewares: son funciones que se ejecutan antes de las peticiones de los usuarios o "rutas" /productos /persona

app.use(morgan('dev')); //morgan hace saber que peticion,ruta hizo el cliente
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'mysql2709',
    port: 3307,
    database: 'crudnode'
}, 'single'));

app.use(express.urlencoded({ extended: false }));

//RUTAS

app.use('/', compradoRoutes);

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));


//EMPEZANDO EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log("Serve port 3000 init");
});