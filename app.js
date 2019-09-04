const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.get('/',(req,res)=> res.send('Success'));


database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use('/addresses',require('./routes/addresses'));
app.use('/cards',require('./routes/cards'));  
app.use('/cartDetails',require('./routes/cartDetails'));
app.use('/carts',require('./routes/carts'));
app.use('/cartStatus',require('./routes/cartStatus'));
app.use('/productCategories',require('./routes/productCategories'));
app.use('/products',require('./routes/products'));
app.use('/sellers',require('./routes/sellers'));
app.use('/stores',require('./routes/stores'));
app.use('/teachers',require('./routes/teachers'));
app.use('/users',require('./routes/users'));



app.listen(PORT,console.log(`Server started on port ${PORT}`));