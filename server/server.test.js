const supertest = require('supertest');
const expect_assert = require('expect');

var app = require('./server').app;

describe('Express Tests for HTTP',()=>{
  it('should give Express is Up response', (done)=>{
    supertest(app)
      .get('/')
      .expect(200)
      //.expect('Express is Up')
      //.expect(404)
      //.expect('Server Down')
      .expect((res)=>{
        expect_assert(res.body).toInclude({
          name:'Ankur'
        });
      })
      .end(done);
  });

  it('should test if array object in response has John 24', (done)=>{
    supertest(app)
      .get('/users')
      .expect(200)
      .expect((res)=>{
        expect_assert(res.body).toInclude({
            name:'John',
            age:24
        });
      })
      .end(done);
  });
});
