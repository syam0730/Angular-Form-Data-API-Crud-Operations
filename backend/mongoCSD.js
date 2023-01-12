const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const app = express();
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/',{
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
    country:String,
    state:String,
    district:String
    
}
const monmodel = mongoose.model("NEWCOL", Schema);
app.post("/sandra", async (req, res) => {
    console.log("inside post function");

    const data = new monmodel({
        
        country:req.body.country,
        state:req.body.state,
        district:req.body.district
        
    });

    res.send({
        status: 200,
        message: "Data Saved Successfully"
    })
    const val = await data.save();
    res.json(val);
})

app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000');
})