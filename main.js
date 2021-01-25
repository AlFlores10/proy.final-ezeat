// Imports

const express = require('express');                                    // Importa Express
const cors = require('cors');                                          // Importa Cors
const app = express();                                                 // Instancia Express
const PORT = process.env.PORT || 3000;                                 // Define variable de entorno o asigna el puerto 3000 si no la encuentra


// Routes
const routeCustomer = require('./components/customer/router.js');      // Importa customer/router.js
const routeRestaurant = require('./components/restaurant/router.js');  // Importa customer/router.js


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


// Node Server Connection
app.listen(PORT, ()=> {                                                // Iniciando servidor Node
    console.log('Server running on port '+ PORT);
});


// Customer Request
app.use     ('/customer', routeCustomer);                              // RouteCustomers
app.use     ('/restaurant', routeRestaurant);                          // RouteRestaurants
