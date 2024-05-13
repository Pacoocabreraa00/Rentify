const express = require('express');
const router = express.Router();
const { User } = require("../models/user");

router.post('/',async(req,res)=>{
    const user = await User.findOne({email: req.body.email});

    //Verificamos si el usuario existe, y dentro si las contraseñas coinciden, si no se devuelve error
    if (user) {
        if (user.password !== req.body.password) return res.status(400).send('Username or password are not correct');

        res.status(200).send({"TOKEN" : "TOKEN"});
    }
    else {
        res.status(400).send('User does not exist')
    }
})
module.exports = router;