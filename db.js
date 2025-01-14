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

//summary The first code snippet sets up a PostgreSQL connection pool using the pg library.
//The connection pool is exported for use in other modules.
//The second code snippet demonstrates how to use the connection pool in an Express application to query data from a PostgreSQL database.
//Make sure to replace the placeholder values (username, password, database name) with your actual PostgreSQL credentials and database information.