<img src='https://images.meteociel.fr/im/3867/logo_size_lth1.jpg'><a href='https://images.meteociel.fr/im/7404/merchandising_rpu6_kfz9.png'><img src='https://images.meteociel.fr/im/7404/merchandising_rpu6kfz9_mini.png'><a href='https://images.meteociel.fr/im/5414/glass_edx9.png'><img src='https://images.meteociel.fr/im/5414/glassedx9_mini.png'><a href='https://images.meteociel.fr/im/2704/shirt_cml7.png'><img src='https://images.meteociel.fr/im/2704/shirtcml7_mini.png'>

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Repositories](#repositories)

### General Info
***
App de pedidos de comida a domicilio creado con JavaScript, NodeJS, ExpressJS, MongoDB, Mongoose, Heroku.

<img src='https://images.meteociel.fr/im/7635/bbdd_diagram_ezeat_dny5.png'>

### Screenshot
<a target='_blank' href='https://images.meteociel.fr/im/1636/get_customer_isn2.png'><img src='https://images.meteociel.fr/im/1636/get_customerisn2_mini.png'></a>
<a target='_blank' href='https://images.meteociel.fr/im/9637/get_restaurant_name_mmv4.png'><img src='https://images.meteociel.fr/im/9637/get_restaurant_namemmv4_mini.png'></a>
<a target='_blank' href='https://images.meteociel.fr/im/8806/login_rkz1.png'><img src='https://images.meteociel.fr/im/8806/loginrkz1_mini.png'></a>
<a target='_blank' href='https://images.meteociel.fr/im/4130/post_menu_num1.png'><img src='https://images.meteociel.fr/im/4130/post_menunum1_mini.png'></a>
<a target='_blank' href='https://images.meteociel.fr/im/8130/post_order_ycj5.png'><img src='https://images.meteociel.fr/im/8130/post_orderycj5_mini.png'></a>


## Technologies
***
Lista de tecnologías utilizadas en el proyecto:
* [JavaScript](https://html.spec.whatwg.org/multipage/): ES6 
* [Node](https://html.spec.whatwg.org/multipage/): Version 12.19 
* [Express](https://html.spec.whatwg.org/multipage/): Version 4.17
* [Mongoose](https://html.spec.whatwg.org/multipage/): Version 5.10 
* [Heroku](https://id.heroku.com/login)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Installation
***
``` bash
1. npm run start # Iniciar el servidor
2. GET -> https://proy-final-ezeat.herokuapp.com/ # Acceder al servidor
3. POST -> https://proy-final-ezeat.herokuapp.com/customer/signup # Crear customer. 
## TEST -> {"firstname": "prueba", "lastname": "prueba","email": "prueba@gmail.com", "password": "1234567"}
4. POST -> https://proy-final-ezeat.herokuapp.com/login # Permite login y recibe token. 
## TEST -> {"email: "test", "password: "1234567", "role": "customer"}
5. GET -> https://proy-final-ezeat.herokuapp.com/customer # Acceder a todos los customers. Necesita token en headers.
6. GET -> https://proy-final-ezeat.herokuapp.com/customer/:_id # Busca un customer por _id.
7. PATCH -> https://proy-final-ezeat.herokuapp.com/customer # Modificar datos.
## TEST -> Enviar por body {"_id": "idCustomer", "password": "newPass"}
8. DELETE -> https://proy-final-ezeat.herokuapp.com/customer/:_id # Elimina customer asociado al :_id recibido.
###########################################
###########################################
2B. GET -> https://proy-final-ezeat.herokuapp.com/ # Acceder al servidor
3B. POST -> https://proy-final-ezeat.herokuapp.com/restaurant/signup # Crear customer. 
## TEST -> {"name": "McDonalds","email": "prueba@gmail.com", "password": "1234567", "adress": "direccion", "image": "imagen.jpg"}
4. POST -> https://proy-final-ezeat.herokuapp.com/login # Permite login y recibe token. 
## TEST -> {"email: "bk@gmail.com", "password: "1234567", "role": "restaurant"}
5. GET -> https://proy-final-ezeat.herokuapp.com/restaurant # Acceder a todos los restaurant.
6. GET -> https://proy-final-ezeat.herokuapp.com/restaurant/:name # Busca un restaurant por name.
7. PATCH -> https://proy-final-ezeat.herokuapp.com/restaurant # Modificar datos.
## TEST -> Enviar por body {"_id": "idRestaurant", "password": "newPass"}
8. DELETE -> https://proy-final-ezeat.herokuapp.com/restaurant/:_id # Elimina restaurant asociado al :_id recibido.

```
## Repositories
***
> * [Repositorio GitHub](https://github.com/AlFlores10/proy.final-ezeat)
> * [Heroku](https://proy-final-ezeat.herokuapp.com/)
> * [LinkdIn](https://www.linkedin.com/in/alflores10/)
