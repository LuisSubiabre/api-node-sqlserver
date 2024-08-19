// server.js
const express = require('express');
const sql = require('mssql');
const config = require('./dbConfig');

const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Endpoint para obtener datos
app.get('/api/datos', async (req, res) => {
    try {
        // Conectar a la base de datos
        await sql.connect(config);
        const result = await sql.query`SELECT * FROM matalumno`;

        // Enviar los datos como respuesta
        res.json(result.recordset);
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
        res.status(500).send('Error en la conexión a la base de datos');
    } finally {
        // Cerrar la conexión
        await sql.close();
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
