const mongoose = require('mongoose');
const URI =  "mongodb+srv://proyecto1:195700majo@cluster0.indinda.mongodb.net/?retryWrites=true&w=majority"  //URI se usa para las keys

mongoose.connect(URI)
.then(() => {console.log("Base de datos Mongo CONNECT")})
.catch((error) => {console.log("Base de datos Mongo NOT CONNECT")})

module.exports = mongoose