const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');
const auth = require('./routes/auth');
const propiedades = require('./routes/propiedades');
const path = require('path');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/v1/user/', user);
app.use('/api/v1/auth/', auth);
app.use('/api/v1/propiedad/', propiedades); // Asegúrate de que esta línea está correctamente configurada

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port: ' + port));

mongoose.connect('mongodb://localhost/rentify', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));
