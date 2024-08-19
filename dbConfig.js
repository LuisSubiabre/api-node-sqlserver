require('dotenv').config(); // Cargar variables de entorno desde .env
const sql = require('mssql');

const config = {
    user: process.env.DB_USER, // Usar variables de entorno
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false, // Para Azure
        trustServerCertificate: true // Cambia esto según tu entorno
    }
};

module.exports = config;
