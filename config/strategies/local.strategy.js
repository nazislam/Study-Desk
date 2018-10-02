const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Datastore = require('@google-cloud/datastore');
const ds = Datastore({
  projectId: 'spo799ibv207km1'
});

function getModel() {
  return require('../../datastore/model-datastore');
}

var verifyUser = function() {
passport.use('local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
function(email, password, done) {
  const queryUser = ds.createQuery('User')
    .filter('email', '=', email)
    .filter('password', '=', password);

  ds.runQuery(queryUser).then(results => {
    const users = results[0];
    if (users[0]) {
      var user = users[0];
      done(null, user);
    } else {
      done(null, false, { message: 'Wrong Credentials' });
    }
  });
}));
};

module.exports = { verifyUser };
