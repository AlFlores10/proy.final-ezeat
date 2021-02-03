// Imports
const router = require('express').Router();
const controller = require('./controller.js');

// Routes (/order)
router.get      ('/', controller.getAllOrder);               /// Muestra todos los pedidos realizados
router.get      ('/:_id', controller.findOrder);             /// Busca pedido realizado por _id
router.post     ('/', controller.postOrder);                 /// Nuevo pedido
router.patch    ('/', controller.updateOrder);               /// Modifica datos de pedido
router.delete   ('/:_id', controller.deleteOrder);           /// Elimina pedido
router.get      ('/profile/:restaurantID', controller.getRestaurantsOrder);

// Exports
module.exports = router;