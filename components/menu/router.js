// Imports
const router = require('express').Router();
const controller = require('./controller.js');

// Routes (/menu)
router.get      ('/', controller.getAllMenu);               /// Muestra todos los menus registrados
router.get      ('/:_id', controller.findMenu);             /// Busca menu registrado por _id
router.post     ('/', controller.postMenu);                 /// Nuevo menu
router.patch    ('/', controller.updateMenu);               /// Modifica datos de menu
router.delete   ('/:_id', controller.deleteMenu);           /// Elimina menu

// Exports
module.exports = router;