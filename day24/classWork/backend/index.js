const { connectDB } = require("./configs/db");
const express = require('express');
const { userRouter } = require("./routes/user.route");
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send("welcome to svu backend app");
});

app.use(userRouter)

const port = 3020;
app.listen(port, async() => {
    try{
        await connectDB
        console.log("DB is connected");
        console.log(`server is running at http://localhost:${port}`);
    }
    catch(error){
        console.log(error.message);
    }
});