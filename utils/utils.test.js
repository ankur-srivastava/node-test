const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', ()=>{
  var res = utils.add(3,5);
  expect(res).toBe(8).toBeA('number');
});

it('should square a number', ()=>{
  var res = utils.square(4);
  expect(res).toBe(16).toBeA('number');
});

it('should test for object equality', ()=>{
  //toBe wont work for objects
  //Use toEqual for objects
  expect({name:'Ankur'}).toEqual({name:'Ankur'});
  //Use toInclude for Arrays
  expect([2,3,4]).toInclude(3);
  expect({
    name:'Ankur',
    age:25
  }).toInclude({
    age:25
  });
});

it('should test full name', ()=>{
  expect(utils.setName({}, 'Ankur Srivastava')).toInclude({
    firstName: 'Ankur',
    lastName: 'Srivastava'
  });
});
