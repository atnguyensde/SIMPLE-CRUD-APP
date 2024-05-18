const express = require('express')
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route.js')
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send("Hello from Node API. Hello")
});

mongoose
    .connect('mongodb+srv://admin:fd0jeevfH7S7Wdiy@backenddb.ll7iikz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000.");
        });
    })
    .catch(() => {
        console.log("Connection failed");
    })