const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port1 = 3500
const port2 = 4000
const fs = require('fs-extra');
const dataPath = require("./data.json");

// READ
app.get('/user', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

// Root:
app.get('/', (req, res) => {
  res.send('The Food Bots Server is running');
});

// Listener port
app.listen(port1 || port2);
