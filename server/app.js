const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const buildDir = path.resolve(__dirname, '..', 'build');
const imageDir = path.resolve(__dirname, '..', 'images');

const app = express();

app.use(morgan('common'));

app.use('/api', bodyParser.json(), require('./api'));

app.use(express.static(buildDir));
app.use('/images', express.static(imageDir));

app.get('*', (req, res) => {
  res.sendFile(
    path.join(buildDir, 'index.html')
  );
});

module.exports = app;
