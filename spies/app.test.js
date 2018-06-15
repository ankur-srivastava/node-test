/*
  Using Spies and rewire from MJackson Expect. To mock functions.
  What we want?
  In the app.js file we make a call to db.js -> saveUser. We want to mock this. We can use spies to do this.
*/

const expect = require('expect');
const rewire = require('rewire');

/*
  The below call does two things.
  1. require app.js
  2. Adds __set__  &  __get__ methods to help mock saveUser
*/

var app = rewire('./app');

var db = {
  saveUser: expect.createSpy()
};
//Replace db with db variable
app.__set__('db', db);

it('should call saveUser with user object',()=>{
  var email = 'ank@gmail.com';
  var pwd = '123';
  app.signupUser(email, pwd);
  expect(db.saveUser).toHaveBeenCalledWith({email,pwd});
});
