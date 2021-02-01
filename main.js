// Imports
const express = require('express');                                    // Importa Express
const cors = require('cors');                                          // Importa Cors
const app = express();                                                 // Instancia Express
const PORT = process.env.PORT || 3000;                                 // Define variable de entorno o asigna el puerto 3000 si no la encuentra


// Routes
const routeCustomer = require('./components/customer/router.js');      // Importa customer/router.js
const routeRestaurant = require('./components/restaurant/router.js');  // Importa restaurant/router.js
const routeMenu = require('./components/menu/router.js');              // Importa menu/router.js
const routeOrder = require('./components/order/router.js');            // Importa order/router.js


// DB Connection
const mongoose = require('mongoose');                                  // Importa ORM Mongoose
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/db-ezeat';

mongoose.connect( MONGO_URI, {                                         // Crea la conexion con la DB
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
})

.then(() => console.log('Mongoose OK'))                                // Se ejecuta si la promesa del metodo connect se resuelve true
.catch(() => console.log('Mongoose OFF'));                             // Se ejecuta si la promesa del metodo connect se resuelve false


// Middlewares
app.use(cors());                                                       // Instancia Cors
app.use(express.json());                                               // Instancia BodyParser
const login = require ('./components/config/config');                  // Importa Login middleware
const auth = require ('./components/config/auth');                     // Importa Auth middleware
const middleIndex = (req, res, next)=> {                               // Middleware Index
    res.json({
        message: "proy.Final-Ezeat Version 1.0.0"
    });
    next();
};

// Node Server Connection
app.listen(PORT, ()=> {                                                // Iniciando servidor Node
    console.log('Server running on port '+ PORT);
});

// Index & Login Request
app.get     ('/', middleIndex);                                        // RouteIndex
app.post    ('/login', login.loginUser);                               // RouteLogin

// Customer Request
app.use     ('/customer', routeCustomer);                              // RouteCustomers

// Restaurant Request
app.use     ('/restaurant', routeRestaurant);                          // RouteRestaurants

// Menu Request
app.use     ('/menu', routeMenu);                                      // RouteMenu

// Order Request
app.use     ('/order', auth.checkToken, routeOrder);                   // RouteOrder
