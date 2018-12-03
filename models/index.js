const mongoose = require("mongoose");
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds123844.mlab.com:23844/thshappyhomes');

// Set up default mongoose connection
const mongoDB = 'mongodb://noor:noor123@ds123844.mlab.com:23844/thshappyhomes'

mongoose.connect(mongoDB);

// for local machine mongo server
// mongoose.connect("mongodb://localhost/happyhomes",
//   err => {
//     //enter ur api name
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database is connceted");
//     }
//   }
// );

module.exports.Pg = require("./pg");

mongoose.Promise = Promise;
