require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const authRoute = require('./route/authroutes');
const { productRouter } = require('./routes/product.routes');
const { protect } = require('./middleware/authMiddleware');
const { connectDB } = require('./config/db');


const app = express();
app.use(express.json());

//Allow frontend requests
app.use(cors());
app.use('/api/auth', authRoute);

// app.use(auth);
app.use('api', productRouter);


app.get('/api/protected', protect, (req, res) => {
    res.json({message: 'This is a  protected route', user: req.user});

});

const port = 3020;

app.listen(process.env.port, async() => {
    try{
        await connectDB();
        console.log("DB is connected");
        console.log(`server is running at http://localhost:${port}`);
    }catch(error){
        console.log(error.message);
    }
});