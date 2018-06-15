const db = require('./db');

var signupUser = (email,pwd)=>{

  db.saveUser({
    email:email,
    pwd:pwd
  });
};

module.exports = {
  signupUser
};
