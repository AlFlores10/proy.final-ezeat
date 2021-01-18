const Customer = require('./model.js');
const bcrypt = require('bcryptjs');


module.exports.getAllCustomer = async (req, res) => {      // Muestra todos los usuarios registrados
    try {
        const dataCustomer = await Customer.find();
        res.status(200).json(dataCustomer);
    }
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, Customer not found'
        });
    }
};


module.exports.findCustomer = async (req, res) => { // Buscar usuario registrado por email
    try {
        const nameCustomer = await Customer.find({ name: req.params.email });
        res.status(200).json({
            message: "Result found",
            firstname: nameCustomer.firstname,
            lastname: nameCustomer.lastname,
            email: nameCustomer.email,
            role: nameCustomer.role
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, Customer not found'
        });
    }
};


module.exports.updateCustomer = async (req, res) => {   // Modificar password customer por ID
    try {
        // const modifyCustomer = await Customer.findById(req.body._id);
        const modifyCustomer = await Customer.findOne({ _id: req.body._id });
        req.body.password = bcrypt.hashSync(req.body.password, 10);

        modifyCustomer.password = req.body.password;
        await modifyCustomer.save();
        res.status(200).json({
            message: `Customer ${modifyCustomer.email} updated successfully`
        });
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Customer could not be updated correctly'
        });
    }

};


module.exports.postCustomer = async (req, res) => {     // Crear nuevo customer
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const { firstname, lastname, email, password } = req.body;
    try {
        const newCustomer = new Customer({ firstname, lastname, email, password });
        await newCustomer.save();
        res.status(200).json({
            message: "Customer created successfully",
            firstname: newCustomer.firstname,
            lastname: newCustomer.lastname,
            email: newCustomer.email,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'An error has occurred, Customer could not be created successfully'
        });
    }
};


module.exports.deleteCustomer = async (req, res) => { // Borrar customer por _id
    try {
        // const borraCustomer = await Customer.deleteOne(req.query.id);
        const borraCustomer = await Customer.findByIdAndRemove(req.query._id);
        res.status(200).json({
            message: `Customer ${borraCustomer.email} deleted successfully`, 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An error has occurred, Customer could not be deleted successfully'
        });
    }
};