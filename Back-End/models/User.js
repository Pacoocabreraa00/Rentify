const mongoose = require('mongoose');

//Creamos la tabla Usuario con los campos necesarios
const userSchema = new mongoose.Schema({
    name: String,
    surName: String,
    email: String,
    password: String,
})

const User = mongoose.model('user',userSchema);

module.exports.User = User;
module.exports.userSchema = userSchema;