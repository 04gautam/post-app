const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name:{
    type: String,
  }
})

const Usermodle = mongoose.model("User", userSchema)

module.exports = Usermodle;