const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.db_url);
const db = mongoose.connection;

db.on("error" , console.error.bind(console , "Error while connecting with the database "));
db.once('open',function(){
    console.log('Mongoose connected ');
})

module.exports = db;
