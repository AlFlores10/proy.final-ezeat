// Imports
const router = require('express').Router();
const controller = require('./controller.js');


// Routes (/customer)
router.get      ('/', controller.getAllCustomer);        /// Muestra todos los customers registrados
router.get      ('/:email', controller.findCustomer);    /// Busca customer registrado por email
router.post     ('/signup', controller.postCustomer);    /// Nuevo customer
router.patch    ('/', controller.updateCustomer);        /// Modifica contraseña de customer
router.delete   (':_id', controller.deleteCustomer);     /// Elimina customer

// Exports
module.exports = router;