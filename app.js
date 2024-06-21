const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/database'); 
const blogRoutes = require('./routes/blog'); 

const app = express();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Rutas
app.use(blogRoutes);

// Sincronizar con la base de datos
sequelize.sync()
    .then(result => {
        app.listen(3000, () => {
            console.log('Servidor iniciado en http://localhost:3000');
        });
    })
    .catch(err => {
        console.log(err);
    });
