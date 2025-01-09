const { Pool } = require('pg');

// PostgreSQL Connection Pool
const pool = new Pool({
    user: 'postgres',         // Replace with your PostgreSQL username
    host: 'localhost',        // Replace with your PostgreSQL host
    database: 'blog_platform', // Replace with your PostgreSQL database name
    password: 'ampoloppa', // Replace with your PostgreSQL password
    port: 5432,               // Default PostgreSQL port
});

module.exports = pool;
