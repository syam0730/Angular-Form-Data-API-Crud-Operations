const bodyParser = require('body-parser');
const express = require('express');
const { validate, ValidationError, Joi } = require('express-validation')
const cors = require('cors');
const mongoose = require("mongoose")
const DataValidation = {
    body: Joi.object({
      ID: Joi.number().required(),
      NAME: Joi.string().regex(/[a-zA-Z]{3,30}/).required(),
      LASTNAME: Joi.string().regex(/[a-zA-Z]{3,30}/).required(),
      EMAILID: Joi.string().email().required(),
      ADDRESS: Joi.string().required(),
      PHONENUMBER: Joi.string().regex(/[0-9]{10,10}/).required()
     
    }),
  }
  
const app = express();
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/mynewdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("connected to db")
    } else {
        console.log("error")
    }
});

const Schema = {
    ID:Number,
    NAME:String,
    LASTNAME:String,
    EMAILID: String,
    PHONENUMBER: Number,
    ADDRESS:String
}
const monmodel = mongoose.model("NEWCOL", Schema);


app.post("/postData",validate(DataValidation, {}, {}), async (req, res) => {
    console.log("inside post function");

    const data = new monmodel({
        ID:req.body.ID,
        NAME:req.body.NAME,
        LASTNAME:req.body.LASTNAME,
        EMAILID:req.body.EMAILID,
        PHONENUMBER:req.body.PHONENUMBER,
        ADDRESS:req.body.ADDRESS,
    });

    res.send({
        status: 200,
        message: "Data Saved Successfully"
    })
    const val = await data.save();
    res.json(val);
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

//get the data ////

app.get('/fetch', function (req, res) {
    // fetchid = req.params.ID;
    monmodel.find(({  }),function (err, val) {
        res.send(val);
    })
})
  
///updata the data ////

app.put('/update/:ID',(req,res) => {
    let updatedID = req.params.ID
    let updatedNAME = req.body.NAME
    let updatedLASTNAME = req.body.LASTNAME
    let updatedEMAILID = req.body.EMAILID
    let updatedPHONENUMBER = req.body.PHONENUMBER
    let updatedADDRESS = req.body.ADDRESS
    
    monmodel.findOneAndUpdate({ID:updatedID},{$set:{NAME: updatedNAME, LASTNAME: updatedLASTNAME, EMAILID:updatedEMAILID, PHONENUMBER: updatedPHONENUMBER, ADDRESS: updatedADDRESS,}},{new: true},(err,data) => {
        if(err){
            res.send(err)
        }else{
            if(data==null){
                res.send({
                    status: false,
                    message: "Nothing found"
                })
            }else{
                res.send({
                    status: true,
                    message: "Data Updated successfully"
                })
                // res.send(data)
            }
        }
    })
})


///Delete/////
app.delete('/del/:ID', function (req, res) {
    let delid = req.params.ID;
    monmodel.findOneAndDelete(({ ID: delid }), function (err, docs) {
        if (err)
        {
            res.send("ERORRRRRRR")
        }
        else {
            if (docs == null){
                res.send("WRONG ID")
            }
        
            else {
            res.send(docs);
            }
       
            
        }
        
    })
})
app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000');
})


