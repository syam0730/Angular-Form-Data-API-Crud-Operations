// // function datetime(){
// //     let dt = new Date();
// //     //current Date
// //     let date = ("0" + dt.getDate()).slice(-2);
    
// //     //current month
// //     let month = ("0" + (dt.getMonth() + 1)).slice(-2);

// //     //current year
// //     let year = dt.getFullYear();

// //     //current hours
// //     let hours = dt.getHours();

// //     //current Minutes
// //     let Minutes = dt.getMinutes();

// //     //current seconds
// //     let seconds = dt.getSeconds();

// //     var output = year + "-" + month + "-" + date + "-" + hours + ":" + Minutes + ":" + seconds;
// //     return output;
// // }

// // module.exports={datetime}

//             ////arrey///
// // function SHYAM() {
// //     var a = [1,2,3,4,5,6,6,7,8,9,9,9,4,5,6,1,2,3,3,7,2,2,3,,4,6,5,8,9,3,3,3,3,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,];

// //     const s = {};
// //     a.map((x) => {
// //     s[x] = s[x] + 1 || 1;
    
// //     });
// //     let k = Object.keys(s);
// //     let v = Object.values(s);
// //     let max = Math.max(...v);
// //     let i = v.findIndex((x)=> {
// //         return x == max;
// //     });
// //     // console.log(k[i]);
// //     return k[i];
// // }
// // module.exports={SHYAM}

// const data = [
//     { Name: 'shyam', email: 'shyamongolu30@gamail.com', age: 20 }
    
// ];
// module.exports = data;



const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  author: String
});

module.exports = mongoose.model("Book", schema);
