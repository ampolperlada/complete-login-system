const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'your_db_user',
    host: 'localhost',
    database: 'your_db_name',
    password: 'your_db_password',
    port: 5432,
});

const secretKey = 'mySecretKey';

app.use(bodyParser.json());

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

// Register Endpoint
app.post('/register', async (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { name, email, password } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        res.status(201).send(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Login Endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );
        if (result.rows.length === 0) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ email }, secretKey);
        res.status(200).send({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Get Users Endpoint
app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).send(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
