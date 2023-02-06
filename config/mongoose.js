const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.mongodb://fullstack-app-server:6DEK6Lw5CpNez5aXmPrMicvqYKoVFVmtK6eRMbxvxIwVflGKCcaRXGtX8vvk3iaZvjzeeb37gr4pACDbNw8sng==@fullstack-app-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@fullstack-app-server@);
const db = mongoose.connection;

db.on("error" , console.error.bind(console , "Error while connecting with the database "));
db.once('open',function(){
    console.log('Mongoose connected ');
})

module.exports = db;
