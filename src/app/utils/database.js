import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno

// Creando la instancia del pool usando las variables de entorno
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

pool.on('connect', client => {
    console.log('Base de datos conectada exitosamente!');
});

export { pool };
