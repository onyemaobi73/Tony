const mongoose = require("mongoose");

const driverdb = "mongodb://0.0.0.0:27017/driverdatabase";

const database = async () => {
  try {
    const dbconnect = await mongoose.connect(driverdb);
    console.log("");
    console.log(`connected`);
  } catch (error) {
    console.log("An error occured in connecting database");
  }
};
module.exports = database();

// const mongoose = require("mongoose");

// const driverdb = "mongodb://0.0.0.0:27017/driverdatabase";

// const database = async () => {
//   try {
//     const dbconnect = await mongoose.connect(driverdb);
//     console.log("");
//     console.log(`connected`);
//   } catch (error) {
//     console.log("An error occured in connecting database");
//   }
// };
// module.exports = database();
