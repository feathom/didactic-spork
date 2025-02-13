//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a route that listens for GET requests on the /comments path
app.get('/comments', (req, res) => {
  res.json([
    {
      id: 1,