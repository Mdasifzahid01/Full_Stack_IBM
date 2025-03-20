// mongodb+srv://mdasifzahid1422:<db_password>@cluster0.omu1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose = require('mongoose');
const connectDB = mongoose.connect("mongodb+srv://mdasifzahid1422:<db_sheikhzahid>@cluster0.omu1z.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0");

module.exports = {
    connectDB
}
