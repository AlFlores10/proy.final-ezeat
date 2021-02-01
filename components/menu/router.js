// Imports
const router = require('express').Router();
const controller = require('./controller.js');
const auth = require('../config/auth');


// Routes (/menu)
router.get      ('/', controller.getAllMenu);                           /// Muestra todos los menus registrados
router.get      ('/:_id', controller.findMenu);                         /// Busca menu registrado por _id
router.post     ('/', auth.checkToken, controller.postMenu);            /// Nuevo menu
router.patch    ('/', auth.checkToken, controller.updateMenu);          /// Modifica datos de menu
router.delete   ('/:_id', auth.checkToken, controller.deleteMenu);      /// Elimina menu

// Exports
module.exports = router;