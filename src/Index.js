//Importaciones
const express = require('express');
const practicantes = require('./fucntions/Practicantes');

//Variables
const puerto = 3500;
const app = express();

app.use(express.static("public"));
app.use("/static", express.static("public"));

//Ruta home
app.get('/',(req,res) => {
    res.status(200)
    res.sendFile( 
        __dirname + '/html/index.html');
});
//Ruta id
app.get('/id/:practicante',(req,res) => {
    res.status(200)
    res.send('Bienvenido');
});
//Ruta register 
app.get('/register',(req,res) => {
    res.status(200)
    res.sendFile(__dirname + '/html/register.html');
});

//Server
console.clear();
app.listen(puerto,()=>{console.log('servidor corriendo en el puerto ',puerto)})
