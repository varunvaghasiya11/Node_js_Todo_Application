const mongoose = require('mongoose');

const todoschema = new mongoose.Schema({
    todo:{
        type : String,
        require : true
    },
    category:{
        type : String,
        require : true
    },
    time:{
        type : Date,
        default : Date.now,
        immutable: true 
    }
});

const todomodel = mongoose.model( 'todos',todoschema);

module.exports = todomodel;