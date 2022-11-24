const mongoose = require("mongoose");

const DB = process.env.DATABASE
console.log(DB);
mongoose.connect('mongodb+srv://new_user:admin@cluster0.gusc1.mongodb.net/tapop?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("DATABASE connected")).catch((err)=> console.log("error" + err.message))


// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
 
// var _db;
 
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("tapop");
//         console.log("Successfully connected to MongoDB."); 
//       }
//       return callback(err);
//          });
//   },
 
//   getDb: function () {
//     return _db;
//   },
// };