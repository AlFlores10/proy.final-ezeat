const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({

    name: { 
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
    adress: {
        type: String,
        required: true,
        maxlength: 100
    },
    delivery: {
        type: Boolean,
        default: true,
    },
    role: {
        type: String,
        default: 'restaurant',
        enum: ['restaurant'],
        maxlength: 10
    },
    image: {
        type: String,
        required: false
    },
    menuID: [{ 
        type: mongoose.ObjectId, ref: 'Menu',
        required: false
    }],
});


module.exports = mongoose.model('Restaurant', RestaurantSchema);