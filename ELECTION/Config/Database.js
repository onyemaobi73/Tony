const mongoose = require("mongoose");

const Candidatedb = "mongodb://0.0.0.0:27017/candidatedatabase";

const database = async () => {
  try {
    const dbconnect = await mongoose.connect(Candidatedb);
    console.log("");
    console.log("connected");
  } catch (error) {
    console.log("An error occured in connecting database");
  }
};

module.exports = database();

// const mongoose = require("mongoose");

// const Candidatedb = "mongodb://0.0.0.0:27017/candidatedatabase";

// const database = async () => {
//   try {
//     const dbconnect = await mongoose.connect(Candidatedb);
//     console.log("");
//     console.log("connected");
//   } catch (error) {
//     console.log("An error occured in connecting database");
//   }
// };

// module.exports = database();
