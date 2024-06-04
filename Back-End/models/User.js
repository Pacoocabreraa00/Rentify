const mongoose = require('mongoose');

//Creamos la tabla Usuario con los campos necesarios
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    nacionalidad: String,
})

const User = mongoose.model('user',userSchema);

module.exports.User = User;
module.exports.userSchema = userSchema;