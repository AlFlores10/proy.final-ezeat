const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

    firstname: { 
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: Email,
        required: true,
        unique: true
    },
    password: { 
        type: String, 
        required: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']      //Solo permitimos crear usuarios con rol "user"
    }
});


module.exports = mongoose.model('Customer', CustomerSchema);