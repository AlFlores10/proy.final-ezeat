// Imports
const router = require('express').Router();
const controller = require('./controller.js');

// Routes (/)
router.post     ('/signup', controller.postCustomer);             /// Nuevo customer                          ///

// Routes (/customers)
router.get      ('/', controller.getAllCustomer);                 /// Muestra todos los customers registrados ///
router.get      ('/customers/:_id', controller.findCustomer);     /// Busca customer registrado por email     ///
router.patch    ('/customers', controller.updateCustomer);        /// Modifica contraseña de customer         ///
router.delete   ('/customers/:_id', controller.deleteCustomer);   /// Elimina customer                        ///

// Exports
module.exports = router;