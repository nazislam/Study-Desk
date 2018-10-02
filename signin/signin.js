const express = require('express');
const signinRouter = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

function getModel() {
  return require('./model-datastore');
}



signinRouter.route('/signin').post(
  passport.authenticate(['local'], { session: true, 
    // successRedirect: '/register/profile', 
    failureRedirect: '/home',
    failureFlash: true}),
  (req, res) => {
    if (req.user.userType === 'client') {
      res.redirect('/register/clientUI');
    }
    else
      res.redirect('/register/driverUI');
  }
);

module.exports = signinRouter;
