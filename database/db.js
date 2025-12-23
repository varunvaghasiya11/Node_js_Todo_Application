const mongoose = require('mongoose');

const db = ()=>{
    mongoose.connect('mongodb://localhost:27017/todo').then(()=>{
        console.log("DB connected..");
    }).catch(()=>{
        console.log("Err",err);
    });
}

module.exports = db;


