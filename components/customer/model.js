const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

    firstname: { 
        type: String,
        required: true,
        maxlength: 30
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 30
    },
    email: {
        type: Email,
        required: true,
        unique: true,
        maxlength: 50
    },
    password: { 
        type: String, 
        required: true,
        minlength: 7,
        maxlength: 15
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
        maxlength: 5      //Solo permitimos crear usuarios con rol "user"
    }
});


module.exports = mongoose.model('Customer', CustomerSchema);