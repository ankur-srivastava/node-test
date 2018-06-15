const expect = require('expect');
const utils = require('./utils');

describe('Utility Tests', ()=>{
  it('should add two numbers', ()=>{
    var res = utils.add(3,5);
    expect(res).toBe(8).toBeA('number');
  });

  it('should square a number', ()=>{
    var res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
  });

  it('should test full name', ()=>{
    expect(utils.setName({}, 'Ankur Srivastava')).toInclude({
      firstName: 'Ankur',
      lastName: 'Srivastava'
    });
  });

  it('should print Hello Ankur', ()=>{
    var message = utils.message('Ankur');
    expect(message).toEqual('Hello Ankur');
  });
  
});

describe('Async Utilities Tests',()=>{
  //For async test we need to specify done parameter
  it('should async add two nos', (done)=>{
      utils.asyncAdd(4,5,(sum)=>{
      expect(sum).toBe(9).toBeA('number');
      done();
    });
  });

  it('should test async square',(done)=>{
    utils.asyncSquare(4, (res)=>{
      expect(res).toBe(16);
      done();
    });
  });

  it('should multiply two nos async', (done)=>{
    utils.asyncMul(3,4,(res)=>{
        expect(res).toBe(12);
        done();
    });
  });
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
