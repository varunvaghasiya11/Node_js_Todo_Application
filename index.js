const express = require('express');
const bodyparse = require('body-parser');
const route = require('./routes/todoroute');

const server = express();

server.use(express.static('public'));
server.use(bodyparse.urlencoded({extended:true}));
server.use('/',route);

server.set('view engine','ejs');

server.listen(3000,(err)=>{
    if(!err){
        console.log('server is running');
    }else{
        console.log('err',err);
    }
});

