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
