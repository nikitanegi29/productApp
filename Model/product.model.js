const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      // lowercase: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      // lowercase: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      // lowercase: true,
    },
  });
  
  const productschema = mongoose.model("productschema", productSchema);
  
  module.exports = productschema
  