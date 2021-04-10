var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
const route=require('./route/routes.js');

var app=express();
mongoose.connect('mongodb://localhost:27017/shoppinglist');

mongoose.connection.on('connected',()=>{
    console.log('connection successfull');
});

mongoose.connection.on('error',(err)=>{
    console.log(err);
});

app.get('/',(req,res)=>{
    res.send('hello world');
});

const PORT=3000;

app.use(cors());

app.use(bodyparser.json());
app.use('/api',route);

app.listen(PORT,()=>{
    console.log('listening port:'+PORT);
});