const Customer = require('../customer/model.js');
const Restaurant = require('../restaurant/model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const secret = 'elsecretodemigato';
const moment = require('moment');


module.exports.loginUser = async (req, res, next) => {
    try {
        let user = '';
        if (req.body.role === 'customer') {
            user = await Customer.findOne({ email: req.body.email });
        };
        if (req.body.role === 'restaurant') {
            user = await Restaurant.findOne({ email: req.body.email });
        };
        if (user) {
            const iguales = bcrypt.compareSync(req.body.password, user.password);
            if (iguales) {
                res.json({ sucess: createToken(user) });

            } else {
                res.json({ error: 'Error en usuario y/o contraseña' });
            }

        } else {
            res.json({ error: 'Error en usuario y/o contraseña' });
        }
    } catch (error) {
        console.log(error);
    }
    next();
};


const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(59, 'minutes').unix()
    }

    return jwt.encode(payload, secret);
}