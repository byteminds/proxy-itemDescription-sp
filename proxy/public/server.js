const express = require('express');
const request = require('request');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();
const port = 3000;

app.use(favicon(path.join(__dirname, './lib', 'favicon.ico')));

app.use('/:id', express.static(path.join(__dirname, 'lib')));

app.get('/api/:id', (req, res) => {
  const id = req.params.id
  const url = `http://localhost:3003/api/${id}`;
  req.pipe(request(url)).pipe(res);
});

app.listen(
  port,
  () => console.log(`listening on port ${port}`)
);