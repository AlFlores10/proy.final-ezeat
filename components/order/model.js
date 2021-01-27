const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    customerID: { 
        type: mongoose.ObjectId, ref: 'Customer',
        required: true
    },
    restaurantID: {
        type: mongoose.ObjectId, ref: 'Restaurant',
        required: true,
    },
    menuID: {
        type: mongoose.ObjectId, ref: 'Menu',
        required: true,
    },
    bill: {
        type: String,
        required: true,
        enum: ['card', 'cash']
    }
});


module.exports = mongoose.model('Order', OrderSchema);