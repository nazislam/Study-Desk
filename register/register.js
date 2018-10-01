const express = require('express');
const registerRouter = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

registerRouter.use(bodyParser.json());
registerRouter.use(bodyParser.urlencoded({extended: false}));
registerRouter.use(cookieParser());
registerRouter.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
registerRouter.use(flash());

function getModel() {
  return require('./model-datastore');
}

registerRouter.route('/')
  .get(function(req, res) {
    res.render('register');
  })
  .post(function(req, res) {
    req.login(req.body, function() {
      const data = req.body;
      console.log(data);
      getModel().createUser(data);
    });
  });

module.exports = registerRouter;
