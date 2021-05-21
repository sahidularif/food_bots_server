
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs-extra');
require('dotenv').config();
const app = express();

const port1 = 3500
const port2 = 4000


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

// Root:
app.get('/', (req, res) => {
  res.send('The Food Bots Server is running');
});

// Listener port
app.listen(port1 || port2);
