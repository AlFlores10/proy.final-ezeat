// Imports
const router = require('express').Router();
const controller = require('./controller.js');
const auth = require('../config/auth');

// Routes (/restaurant)
router.get      ('/', controller.getAllRestaurant);                         /// Muestra todos los restaurantes registrados
router.get      ('/:name', controller.findRestaurant);                      /// Busca restaurante registrado por name
router.post     ('/signup', controller.postRestaurant);                     /// Nuevo restaurante
router.patch    ('/', auth.checkToken, controller.updateRestaurant);        /// Modifica datos de restaurante
router.delete   ('/:_id', auth.checkToken, controller.deleteRestaurant);    /// Elimina restaurante

// Exports
module.exports = router;