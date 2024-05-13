const express = require('express');
const mongoose = require('mongoose');
const user = require('../Back-End/routes/user');
const auth = require('../Back-End/routes/auth');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
//Definimos las rutas de la API
app.use('/api/v1/user/', user);
app.use('/api/v1/auth/', auth);


//Ponemos el puerto que queremos
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('Listening on port: '+ port));

//Conexion con base de datos MongoDB
mongoose.connect('mongodb://localhost/rentify', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));