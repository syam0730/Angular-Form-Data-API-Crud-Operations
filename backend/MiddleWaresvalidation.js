// const { appendFile } = require('fs');
// const express = require('express');
// const app = express();
// const http = require('http');
// const hostname = "localhost";
// const port = 3000;
// app.use = (function(req, res, next){
//     res.statusCode = 200;
//     res.setHeader("content-Type", "text/html");
//     // res.end("Hello World!");
//     res.end("<h1>Hello World!</h1>");
// });
// app.listen(port, hostname, (next, req, res) => {
//     console.log(`server is running on localhost:${port}`);
//     next();
// });


// var express = require('express');
// var app = express();
// var handler = route('handler');

// //Simple request time logger
// app.use(function(req, res, next){
//    console.log("A new request received at " + Date.now());
   
//    //This function call is very important. It tells that more processing is
//    //required for the current request and is in the next middleware
//    function route handler().
//    next();
// });

// app.listen(3000);

    /////// Application level middleware////////// 

// var express = require('express');
// var app = express()

// app.use(function (req, res, next) {
//   console.log('Hello from the middleware !')
//   next()
// })
// app.listen(3000);


///////Router level middleware//////

// var express = require('express');
// var app = express();

// //Middleware function to log request protocol
// app.use('/things', function(req, res, next){
//    console.log("A request for things received at " + Date.now());
//    next();
// });

// // Route handler that sends the response
// app.get('/things', function(req, res){
//    res.send('Router level Middleware');
// });

// app.listen(3000);



///////Error handling middlewares//////

// var express = require('express');
// var app = express();
// app.use('/data', function (req, res, next) {
//     try {
//         console.log('Error handling middleware app.use(err,req,res,next)');
//     }
//     catch (err) {
//         next(err);
//     }
// })
// app.listen(3000);


// const bodyParser = require('body-parser');
// const express = require('express');
// // const { check, validationResult } = require('express-validator');
// const { body, validationResult } = require('express-validator');
// const urlencodedParser = bodyParser.urlencoded({extended: false})
// const app = express();
// app.post(
//     '/postData',
//     // name must be an string
//     body('name').isString().isLength({ min: 3 }),
//       // age must be an number
//     body('age'). isNumeric().isLength({ min: 2 }),
//     // username must be an email
//     body('email').isEmail(),
//     // password must be at least 5 chars long
//     body('phone').isNumeric().isLength({ min: 10 }),
//     (req, res) => {
//       // Finds the validation errors in this request and wraps them in an object with handy functions
//       const errors = validationResult(req);
//         if (errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//         else {
//             res.send({
//                 status: true,
//                 msg: 'Data post successful',
//             })
//         }
//     },
//   );

// app.listen(3000, (req, res) => {
//     console.log('Express API is running at port 3000');
// })