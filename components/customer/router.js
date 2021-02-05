// Imports
const router = require('express').Router();
const controller = require('./controller.js');
const auth = require('../config/auth');


// Routes (/customer)
router.get      ('/', auth.checkToken, controller.getAllCustomer);        /// Muestra todos los customers registrados
router.get      ('/:_id', auth.checkToken, controller.findCustomer);    /// Busca customer registrado por email
router.post     ('/signup', controller.postCustomer);                     /// Nuevo customer
router.patch    ('/', auth.checkToken, controller.updateCustomer);        /// Modifica contraseña de customer
router.delete   ('/:_id', auth.checkToken, controller.deleteCustomer);     /// Elimina customer

// Exports
module.exports = router;