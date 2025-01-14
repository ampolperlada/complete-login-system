const pool = require('./db'); // Import the PostgreSQL client

// Test the Database Connection
const testConnection = async () => {
    try {
        const res = await pool.query('SELECT NOW()'); // Query the current time
        console.log('PostgreSQL Connected:', res.rows[0]);
    } catch (err) {
        console.error('Error connecting to PostgreSQL:', err.message);
    } finally {
        pool.end(); // Close the connection
    }
};

testConnection(); // Run the test

//note for this: In summary, the code snippet is a Node.js script for testing a connection to a PostgreSQL database. It can be part of a larger application, including an Express server, 
// but it is not inherently tied to Express itself.




//NOTE: PACKAGE In summary, the package-lock.json file is a crucial part of a Node.js project that helps manage dependencies, ensuring consistent installations across different environments while providing metadata about the project and its dependencies.