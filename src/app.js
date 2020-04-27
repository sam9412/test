const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const app=express();
//importando rutas

const customerRoutes = require('./routes/customer');
//settings
app.set('port',process.env.PORT ||3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//midlewares
app.use(morgan('dev'));
app.use(myconnection(mysql,{
  host:'localhost',
  user:'root',
  password:'samuel941220',
  port:'3306',
  database:'crudnode'
},'single'))
app.use(express.urlencoded)

//rutas
app.use('/',customerRoutes);

//statics files
app.use(express.static(path.join(__dirname,'public')));


//empezando el servidor
app.listen(app.get('port'),()=>{
  console.log('server on port 3000');
});
