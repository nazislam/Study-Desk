const express = require('express');
const registerRouter = express.Router();
const bodyParser = require('body-parser');

registerRouter.use(bodyParser.json());
registerRouter.use(bodyParser.urlencoded({extended: false}));

function getModel() {
  return require('./model-datastore');
}

registerRouter.route('/')
  .get(function(req, res) {
    res.render('register');
  })
  .post(function(req, res) {
    const data = req.body;
    console.log(data);
    getModel().createUser(data);
    res.send('submitted');
  });

module.exports = registerRouter;
