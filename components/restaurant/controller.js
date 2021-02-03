const Restaurant = require('./model.js');
const bcrypt = require('bcryptjs');


module.exports.getAllRestaurant = async (req, res) => {                           // Muestra todos los restaurantes registrados
    try {
        const dataRestaurant = await Restaurant.find()
        .populate('menuID')
        .exec((err, dataRestaurant) => {        
            res.status(200).json(dataRestaurant);
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, Restaurants not found'
        });
    }
};


module.exports.findRestaurant = async (req, res) => {                             // Buscar restaurante por name
    try {
        const nameRestaurant = await Restaurant.findOne({ name: req.params.name });
        res.status(200).json({
            message: "Result found",
            name: nameRestaurant.name,
            email: nameRestaurant.email,
            adress: nameRestaurant.adress,
            delivery: nameRestaurant.delivery
            
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, Restaurant not found'
        });
    }
};


module.exports.updateRestaurant = async (req, res) => {                           // Modificar atributos restaurante por _id
    try {
        const modifyRestaurant = await Restaurant.findOne({ _id: req.body._id });
        if(req.body.password){ 
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            modifyRestaurant.password = req.body.password;
        };
        if(req.body.name){ 
            modifyRestaurant.name = req.body.name;
        };
        if(req.body.adress){ 
            modifyRestaurant.adress = req.body.adress;
        };
        if(req.body.delivery){ 
            modifyRestaurant.delivery = req.body.delivery;
        };
        if(req.body.image){ 
            modifyRestaurant.image = req.body.image;
        };
        if(req.body.menuID){ 
            modifyRestaurant.menuID = req.body.menuID;
        };
        await modifyRestaurant.save();
        res.status(200).json({
            message: `Restaurant ${modifyRestaurant.email} updated successfully`
        });
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Restaurant could not be updated correctly'
        });
    }

};


module.exports.postRestaurant = async (req, res) => {                             // Crear nuevo restaurante
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const { name, email, password, adress, image } = req.body;
    try {
        const newRestaurant = new Restaurant({ name, email, password, adress, image });
        await newRestaurant.save();
        res.status(201).json({
            message: "Restaurant created successfully",
            name: newRestaurant.name,
            email: newRestaurant.email,
            adress: newRestaurant.adress,
            image: newRestaurant.image
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'An error has occurred, Restaurant could not be created successfully'
        });
    }
};


module.exports.deleteRestaurant = async (req, res) => {                           // Borrar restaurante por _id
    try {
        const borraRestaurant = await Restaurant.findByIdAndDelete({ _id: req.params._id});
        res.status(200).json({
            message: `Restaurant ${borraRestaurant.email} deleted successfully`, 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An error has occurred, Restaurant could not be deleted successfully'
        });
    }
};