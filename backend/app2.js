const express = require('express')
const bodyParser = require('body-parser')
const { validate, ValidationError, Joi } = require('express-validation')
const cors = require('cors');
const mongoose = require('mongoose');
// const { mongoose } = require('./modules.js');
// var employeeController = require('./employee.js/employeeController.js');
const DataValidation = {
  body: Joi.object({
    NAME: Joi.string().regex(/[a-zA-Z]{3,30}/).required(),
    LASTNAME: Joi.string().regex(/[a-zA-Z]{3,30}/).required(),
    EMAILID: Joi.string().email().required(),
    ADDRESS: Joi.string().required(),
    PHONENUMBER: Joi.string().regex(/[0-9]{10,10}/).required()
   
  }),
}
const app = express();
// app.use(bodyParser.json())
app.use(cors())
app.get('/getData', (req, res) => {
    res.json({
        "statuscode": "700",
        "statusMessage":"success"
    })
})
app.post('/postData', validate(DataValidation, {}, {}), (err, res, req) => {
        res.send({
            status: 200,
            message: "Data Saved Successfully"
        })
})
app.use(function(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.send({
        status: 400,
        message: "Validation required"
        }).status(err.statusCode)
    
  }
  return res.status(400).json(err)
})

// const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/nodejsout", { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
  if(!err) console.log('db connected');
  else console.log('db error');
})
const newSchema = new mongoose.Schema({
  // NAME: String,
  // LASTNAME: String,
  // EMAILID: String,
  // PHONENUMBER: String,
  // ADDRESS: String,
 
})
// const newModel = new mongoose.model("nodejsout",newSchema);
// const value = new newModel({
//   // NAME: "SUNDAR",
//   // LASTNAME: "sundar",
//   // EMAILID: "syamongolu30@gmail.com",
//   // PHONENUMBER: "8886207583",
//   // ADDRESS: "Nellore",
//  })
value.save();
app.listen(3000)
console.log("Listening on PORT 3000");