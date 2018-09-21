const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('hey, hello');
});

app.listen(port, function() {
  console.log('server is running on port', port)
});