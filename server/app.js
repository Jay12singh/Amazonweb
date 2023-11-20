require('dotenv').config();
const express = require('express');
const app = express();
const Products = require('./models/productsSchema');
const DefaultData = require('./defaultData');
const mongoose = require('mongoose');
const cors = require("cors");
const router = require('./routes/router');
const cookieParser = require('cookie-parser');
require("./db/conn");
require('./db/conn');



app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const PORT = 8005;



// app.get("/",(req,res)=>{
//     res.send("server is created");
// })



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

DefaultData();
