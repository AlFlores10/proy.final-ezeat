// Imports
const router = require('express').Router();
const controller = require('./controller.js');

// Routes (/)
router.post     ('/', controller.postCustomer);             /// Nuevo customer                          ///

// Routes (/customers)
router.get      ('/', controller.getAllCustomer);           /// Muestra todos los customers registrados ///
router.get      ('/:email', controller.findCustomer);       /// Busca customer registrado por email     ///
router.patch    ('/', controller.updateCustomer);           /// Modifica contraseña de customer         ///
router.delete   ('/', controller.deleteCustomer);           /// Elimina customer                        ///

// Exports
module.exports = router;