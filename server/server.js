const express = require('express');

var app = express();

app.get('/', (req, res)=>{
  res.status(200).send({
    message:'Express is Up',
    name:'Ankur'
  });
  //res.status(404).send('Server Down');
});

app.get('/users', (req,res)=>{
  var userArray = [
                    {
                      name:'Ankur',
                      age:35
                    },
                    {
                      name:'John',
                      age:24
                    }
                  ];
  res.status(200).send(userArray);
});

app.listen(3000,()=>{
  console.log('Server is Up');
});

module.exports = {
  app
};
