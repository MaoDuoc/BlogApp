// server.js
const express = require('express');
const sequelize = require('./models/database');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Importar rutas
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Configurar motor de vistas y carpeta pública
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Sincronizar los modelos con la base de datos
sequelize.sync();

// Usar rutas
app.use(postRoutes);
app.use(commentRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
