const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
require('dotenv/config');

//Middleware
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


// Routes
app.get('/', (req, res) => {
    res.send("Homepage")
});



// database connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () => {
    console.log("database connected")
})


app.listen(3000);