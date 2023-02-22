const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoute');
const dotenv = require('dotenv');
const CONFIG = require("./config/config");

require("dotenv").config();

dotenv.config();

const app = express();

app.use(bodyParser.json());


// middleware
app.use(express.json());

// routes
app.use('/notes', noteRouter)
app.use('/', userRouter)

// home route
app.get('/', (req, res) => {
    return res.json({ message: "Welcome to the Notes Api page" })
})

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})

const connectToDb = require('./database/db');
const { post } = require('./routes/userRoutes');

connectToDb()

app.listen(CONFIG.PORT, () => {
    console.log(`Server started on http://localhost:${CONFIG.PORT}`)
})