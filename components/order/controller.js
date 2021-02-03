const Order = require('./model.js');
const Restaurant = require('../restaurant/model.js');


module.exports.getAllOrder = async (req, res) => {                           // Muestra todas los pedidos realizados
    try {
        const dataOrder = await Order.find()
            .populate('customerID')
            .populate('restaurantID')
            .populate('menuID')
            .exec((err, dataOrder) => {
                res.status(200).json(dataOrder);
            });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, Orders not found'
        });
    }
};


module.exports.findOrder = async (req, res) => {                             // Buscar pedido por _id
    try {
        const idOrder = await Order.findOne({ _id: req.params._id });
        res.status(200).json({
            message: "Result found",
            idOrder
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, Order not found'
        });
    }
};


module.exports.updateOrder = async (req, res) => {                           // Modificar atributos pedido por _id

    try {
        const modifyOrder = await Order.findOne({ _id: req.body._id });
        if (req.body.menuID) {
            modifyOrder.menuID = req.body.menuID;
        };
        if (req.body.bill) {
            modifyOrder.bill = req.body.bill;
        };

        await modifyOrder.save();
        res.status(200).json({
            message: `Order ${modifyOrder._id} updated successfully`
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Order could not be updated correctly'
        });
    }

};


module.exports.postOrder = async (req, res) => {                             // Crear nuevo pedido
    const { customerID, restaurantID, menuID, bill } = req.body;
    try {
        const newOrder = new Order({ customerID, restaurantID, menuID, bill });
        await newOrder.save();
        res.status(201).json({
            message: "Order created successfully",
            customerID: newOrder.customerID,
            restaurantID: newOrder.restaurantID,
            menuID: newOrder.menuID,
            bill: newOrder.bill
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'An error has occurred, Order could not be created successfully'
        });
    }
};


module.exports.deleteOrder = async (req, res) => {                           // Borrar pedido por _id
    try {
        const borraOrder = await Order.findByIdAndDelete({ _id: req.params._id });
        res.status(200).json({
            message: `Order ${borraOrder._id} deleted successfully`,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'An error has occurred, Order could not be deleted successfully'
        });
    }
};

module.exports.getRestaurantsOrder = async (req, res) => {
    try {
        const data = await Order.find({restaurantID: req.params.restaurantID})
        .populate('customerID')
        .populate('restaurantID')
        .populate('menuID')
        .exec((err, data) => {
            res.status(200).json({
                data: data
            });
        });
    } catch (error) {
        res.status(400).json({
            message: "Error"
        });
    }
};