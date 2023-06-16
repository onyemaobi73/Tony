const mongoose = require("mongoose");

const studentdb = "mongodb://0.0.0.0:27017/studentdatabase";

const database = async () => {
  try {
    const dbconnect = await mongoose.connect(studentdb);
    console.log("");
    console.log(`connected`);
  } catch (error) {
    console.log("An error occured in connecting database");
  }
};
module.exports = database()

// const mongoose = require("mongoose")

// const studentdb = "mongodb://0.0.0.0:27017/studentdatabase"

// const database = async () =>{
//   try {
//     const dbconnect = await mongoose.connect(studentdb)
//     console.log("");
//     console.log("connected");
//   } catch (error) {
//     console.log("An error occured in connecting database");
//   }
// }
// module.exports = database()