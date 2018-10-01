const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const port = process.env.PORT || 3000;

const registerRouter = require('./register/register');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'pug');
app.set('views', './public/views');

app.use('/', router);
app.use('/register', registerRouter);

router.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('server is running on port', port)
});