require('dotenv').config();
const express = require('express');

const studentRouter = require('./routes/studentRoutes');

const app = express();

app.use(express.json());


app.use('/student', studentRouter);



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(`server listening on PORT ${PORT}`);
    
});