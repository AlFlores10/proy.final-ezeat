const Menu = require('./model.js');
const Restaurant = require('../restaurant/model.js');


module.exports.getAllMenu = async (req, res) => {                           // Muestra todos los menus registrados
    try {
        const dataMenu = await Menu.find()
        .populate('restaurantID')
        .exec((err, dataMenu) => {        
            res.status(200).json(dataMenu);
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, Menus not found'
        });
    }
};


module.exports.findMenu = async (req, res) => {                             // Buscar menu por _id
    try {
        const idMenu = await Menu.findOne({ _id: req.params._id });
        res.status(200).json({
            message: "Result found",
            restaurantID: idMenu.restaurantID,
            name: idMenu.name,
            ingredient: idMenu.ingredient
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, Menu not found'
        });
    }
};


module.exports.updateMenu = async (req, res) => {                           // Modificar atributos menu por _id
    try {
        const modifyMenu = await Menu.findOne({ _id: req.body._id });
        if(req.body.name){ 
            modifyMenu.name = req.body.name;
        };
        if(req.body.ingredient) { 
            modifyMenu.ingredient = req.body.ingredient; 
        };
        if(req.body.restaurantID) { 
            modifyMenu.restaurantID = req.body.restaurantID; 
        };

        await modifyMenu.save();
        res.status(200).json({
            message: `Menu ${modifyMenu.name} updated successfully`
        });
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Menu could not be updated correctly'
        });
    }

};


module.exports.postMenu = async (req, res) => {                             // Crear nuevo menu
    const { restaurantID, name, ingredient } = req.body;
    try {
        const restaurant = await Restaurant.findOne({_id: restaurantID});
        const newMenu = new Menu({ restaurantID, name, ingredient });
        await newMenu.save();
        console.log(newMenu);
        restaurant.menuID.push(newMenu._id);
        await restaurant.save();
        res.status(201).json({
            message: "Menu created successfully",
            restaurantID: newMenu.restaurantID,
            name: newMenu.name,
            ingredient: newMenu.ingredient
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'An error has occurred, Menu could not be created successfully'
        });
    }
};


module.exports.deleteMenu = async (req, res) => {                           // Borrar menu por _id
    try {
        const borraMenu = await Menu.findByIdAndDelete({ _id: req.params._id});
        res.status(200).json({
            message: `Menu ${borraMenu.name} deleted successfully`, 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An error has occurred, Menu could not be deleted successfully'
        });
    }
};