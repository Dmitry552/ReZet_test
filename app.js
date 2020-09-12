const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

//DB
let start = async () => {
  mongoose.Promise = global.Promise;
  mongoose.set('useFindAndModify', false);
  mongoose.connection
    .on('error', error => console.log(error))
    .on('close', () => console.log('Database connection closed.'))
    .once('open', () => {
      var info = mongoose.connections[0];
      console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    });
  await mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });
  app.listen(config.PORT, () => console.log(`Exampl app listening on port ${config.PORT}!`));
}

start();

//Middleware
app.use(express.json({extended: true}));

//Route
app.use('/shipping', require('./router'));

app.use('*',function(req, res){
  var indexFile = path.resolve(__dirname,'./client/public/index.html');
  res.sendFile(indexFile);
});

//код 404
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//последний рубеж
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render('error', {
    message: error.message,
    error: (!(config.NODE_ENV === 'production')) ? error : {},
  });
});