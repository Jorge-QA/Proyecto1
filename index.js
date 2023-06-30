const express = require('express');
const mongoose = require('mongoose');
// database connection
const db = mongoose.connect("mongodb://127.0.0.1:27017/proyect", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const bodyparser = require('body-parser');
require('dotenv').config()// para las variables de entorno...

const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos

// importar rutas para tener orden
const authRoutes = require("./routes/auth");

// route middlewares para validaciónes
app.use('/api/user',authRoutes)


// iniciar server
app.listen(3001, () => console.log(`Servidor corriendo en puerto: 3001!`))