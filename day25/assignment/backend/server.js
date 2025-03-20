const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/authRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
// const port = process.env.port || 3000;
// middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

// routes
app.use('/api/auth', authRoute);

const port =  5000;
app.listen(process.env.port, async() =>{
    try {
        await connectDB;
        console.log('connected DB');
        console.log(`server is running at http://localhost:${port}`);
    } catch (error) {
        console.log(error.message);
    }
});


