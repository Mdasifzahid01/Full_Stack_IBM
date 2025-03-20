const mongoose = require('mongoose');
equire('dotenv').config()

const connectDB = mongoose.connect('process.env.MONGO_URL');

module.exports = {
    connectDB
}