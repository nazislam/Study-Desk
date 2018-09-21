const express = require('express');
const registerRouter = express.Router();
const bodyParser = require('body-parser');

registerRouter.use(bodyParser.json());
registerRouter.use(bodyParser.urlencoded({extended: false}));

registerRouter.route('/')
  .get(function(req, res) {
    res.render('register');
  })
  .post(function(req, res) {
    const data = req.body;
    console.log(data);
    res.send('submitted');
  });

module.exports = registerRouter;
