const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const port = process.env.PORT || 3000;

const registerRouter = require('./register/register');
const signinRouter = require('./signin/signin');

app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
require('./config/passport')(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  next();
});

app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'pug');
app.set('views', './public/views');

app.use('/', router);
app.use('/register', registerRouter);
app.use('/signin', signinRouter);

router.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('server is running on port', port)
});
