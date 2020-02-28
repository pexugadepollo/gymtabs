const crypto = require('crypto');
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Se requiere un nombre de usuario']
    },
    email: {
        type: String,
        required: [true, 'Se requiere un email'],
        unique: true,
        lowercase: true,
    },
    rol: {
        type: String,
        enum: ['admin', 'user', 'trainer'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Introduce una contraseña'],
        minlength: [8, "Contraseña demasiado corta"]
    },
    peso: {
        type: Number,
        default: 0
    },
    altura: {
        type: Number,
        default: 0
    },
    tabla: {
        type: [[String]],
        default: [["0"]]
    }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;