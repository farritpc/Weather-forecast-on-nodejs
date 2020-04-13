const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send('hello,Home Page')
});
app.get('/api/forcast',function(req,res){
    res.send('Weather Forcast result')
});
app.get('/api/coordinate',function(req,res){
    res.send('Weather Forcast from coordinate')
});
app.get('/api/city',function(req,res){
    res.send('Weather Forcast from city')
});
const port = process.env.port || 3000;
app.listen(port , function(){
    console.log('Listening on port',port);
})