const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/', (req, res) => {
  res.send('Hello, please redirect to /(insert id number)');
});

app.use(express.static('public'));

app.use('/:id', express.static(path.join(__dirname, 'public')));

app.get('/descriptions/:id', (req, res) => {
  const id = req.params.id;
  const url = `http://ec2-54-67-53-174.us-west-1.compute.amazonaws.com/descriptions/${id}`;
  axios.get(url)
    .then(data => res.send(data.data))
    .catch(error => console.log('ERROR', error))
});

app.get('/api/:id', (req, res) => {
  const id = req.params.id;
  const url = `http://ec2-3-17-206-111.us-east-2.compute.amazonaws.com/pricingAPI/${id}`;
  axios.get(url)
    .then(data => res.send(data.data))
    .catch(error => console.log('ERROR', error))
});

app.get('/api/:id', (req, res) => {
  const id = req.params.id;
  const url = `http://ec2-34-201-59-177.compute-1.amazonaws.com/api/${id}`;
  axios.get(url)
    .then(data => res.send(data.data))
    .catch(error => console.log('ERROR', error))
});

app.listen(
  port,
  () => console.log(`listening on port ${port}`)
);