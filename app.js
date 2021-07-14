const express = require('express');
const app = express();
const port= 3090;

app.use(express.static('public'));

const  mainRouter= require('./routers/main');

app.use('/', mainRouter);


app.listen(port, () =>
  console.log('Servidor corriendo en puerto http://localhost:' + port)
);