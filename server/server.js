const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const morgan = require('morgan')

require('dotenv').config();

const uri = process.env.ATLAS_URI;
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(uri);

const userRoutes = require('./routes/user.routes');
const bbRoutes = require('./routes/bb.routes');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongoose database is connected succesfully');
})

app.use(morgan("dev"))
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/bb', bbRoutes);

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});


