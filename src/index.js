const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRouter = require('./routers/user');



const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', userRouter);



// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});



// Connect to MongoDB
mongoose
.connect(process.env.MONGODB_URI, { useUnifiedTopology: true})
.then(() => console.log('asdasd conectado desde MongoDB'))
.catch(error => console.error(error));


app.listen(port, () => {
    console.log('Server is running on port', port);
});

module.exports = app;