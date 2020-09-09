var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var cors = require('cors'); 
var UserApi = require('./routes/users');
var db=require('./models/index.js');
var Authenticate = require('./middleware/Authen/Auth');
var app = express();
var server = app.listen(process.env.PORT);
var io = require('socket.io').listen(server);
const Socket_api = require('./middleware/Socket_control/Socket_api')(io);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const whitelist = [];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)
      callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors(corsOptions)); //Allow cors for front-end  Place this line before router.

app.use('/users', UserApi);

app.use(Authenticate.checkAuth);  //All route below are protected by accesstoken


db.sequelize.sync().then(async function(){
    console.log('model sync process finished');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// http.listen(process.env.PORT,function(){//Create http listener
//   console.log('server is running on port '+ process.env.PORT);
// });
module.exports = app;
