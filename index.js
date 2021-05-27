const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use('/src', express.static(__dirname + '/src'))
app.use('/img', express.static(__dirname + '/img'))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/gallery',function(req,res){
  res.sendFile(path.join(__dirname+'/gallery.html'));
});

router.get('/onsale',function(req,res){
  res.sendFile(path.join(__dirname+'/onsale.html'));
});

router.get('/bio',function(req,res){
  res.sendFile(path.join(__dirname+'/bio.html'));
});

router.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3005);

console.log('Running at Port 3005');