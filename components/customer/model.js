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
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    password: { 
        type: String, 
        required: true,
        minlength: 7,
        maxlength: 100
    },
    role: {
        type: String,
        default: 'customer',
        enum: ['customer'],
        maxlength: 8
    }
});


module.exports = mongoose.model('Customer', CustomerSchema);