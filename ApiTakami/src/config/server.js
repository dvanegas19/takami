const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars')
const app = express()

// settings
app.set('port', process.env.PORT || 3000);
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '../app/views'));
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
  }))
  app.set('view engine', '.hbs')
// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
//app.use(express.static(path.join(__dirname, '../static')))
app.get(path.join(__dirname, '../app/views'), (req, res) => {
    res.render('login')
  })

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });
  

module.exports = app;
