const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
app.use(cors());
mongoose
    .connect(
        'mongodb://mongo:27017/acme',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected : Acme Db..'))
    .catch(err => console.log(err));


app.get('/api', (req, res) => {
    res.send("Hi again");
});

const port = 3000;
app.listen(port, () => console.log("Started Server..."));
