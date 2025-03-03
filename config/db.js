const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb://0.0.0.0/rel-prac").then(()=>{
  console.log("Database is connected to server: ")
}).catch((err)=>console.error(err));