const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/happyhomes',(err)=>{ //enter ur api name
    if(err){
        console.log(err);
    }else {
        console.log("Database is connceted");
    } 
});

module.exports.Pg = require('./pg')

mongoose.Promise = Promise;