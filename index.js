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

// importar rutas para tener orden
const authRoutes = require("./routes/auth");
const validateToken = require("./routes/validateToken");
const admin = require("./routes/admin");

// route middlewares para validaciónes
app.use('/api/user',authRoutes)
// se ejecuta la validación antes de pasar a las rutas...
app.use('/api/admin',validateToken, admin)


// iniciar server
app.listen(3001, () => console.log(`Servidor corriendo en puerto: 3001!`))