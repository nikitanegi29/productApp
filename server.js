const express = require('express')
const app=express()

const mongoose = require('mongoose')
app.use(express.json())

var bodyParser = require('body-parser');
app.use(bodyParser())


const route=require("./routes/product.routes.js")
app.use(route)
const route1=require("./routes/form.routes.js")
app.use(route1)
const connectionURL ="mongodb+srv://nikita:n12345678@cluster0.jgpif.mongodb.net/nik"
const  mongooose = require("mongoose")
const connectDB = (DB_CONNECTION_URL) => {
  console.log("DB trying to connect on " + new Date());

  const options = {
    useNewUrlParser: true,
    // useFind: true,
    useUnifiedTopology: true
  };
  return mongooose.connect(DB_CONNECTION_URL, options);
};
connectDB(connectionURL)

app.listen(5000,()=>{
    console.log(`Server is running at port: `+ 5000)
})
