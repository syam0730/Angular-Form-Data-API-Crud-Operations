// var express = require('express');
// var expobj = express();
// var bodyparser = require('multer');
// var multer = require('multer');
// var upload = multer();
// let port = 3000;
// expobj.use(bodyparser.urlencoded({ extended: true }))
// expobj.use(upload.array())
// expobj.post('/insertTrackDetails', function (req, res) {
//     console.log(req.body);
//     res.send('requested data received.check in console!!!')
// })
// expobj.listen(port)



// const express = require('express')
// const app = express()
// var bodyParser = require('body-parser')
// var multer = require('multer')
// var upload = multer()
// const port = 3000
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(upload.array())
// app.post('/data',function(req,res){
//     console.log(req.body);
//     // res.status(200);
//     res.send({
//         status: true,
//         msg: 'Data post successful',
//     })
// })
// app.listen(port);




// const express = require('express');
// const app = express();
// const { body, validationResult } = require('express-validator');
// app.use(express.json());
// app.post(
//   '/user',
//   // name must be an string
//   body('name').isString().matches(/^[A-Za-z\s]+$/).isLength({ min: 3 }),
//     // age must be an number
//   body('age'). isNumeric().isLength({ min: 2 }),
//   // username must be an email
//   body('email').isEmail(),
//   // password must be at least 5 chars long
//   body('phonenumber').isNumeric().isLength({ min: 10 }),
//   (req, res) => {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
//     const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//           return res.status(400).json({ errors: errors.array() });
//       }
//       else {
//           res.send({
//               status: true,
//               msg: 'Data post successful',
//           })
//       }
//   },
// );
// app.listen(3000);




