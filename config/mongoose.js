// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doctors_api');
const db = mongoose.connection;
db.on('error', console.error.bind(console , 'connection error:'));
db.once('open', function() {
  console.log("we are connected successfully");
});
module.exports=db;