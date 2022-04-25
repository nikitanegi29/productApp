const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      // lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      // lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      // lowercase: true,
    },
  });
  
  const formschema = mongoose.model("formschema", formSchema);
  
  module.exports = formschema
  