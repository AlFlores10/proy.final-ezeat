const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({

    restaurantID: { 
        type: mongoose.ObjectId, ref: 'Restaurant',
        required: true
    },
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    ingredient: {
        type: String,
        required: true,
        maxlength: 100
    }
});


module.exports = mongoose.model('Menu', MenuSchema);