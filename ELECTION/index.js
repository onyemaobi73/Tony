const express = require("express");
require("./Config/Database")

const port = 2030;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  try {
    return res.status(200).json({
      message: "server is fine and working",
    });
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log("server is now connected to port", port);
});

// const express = require(express);

// const port = 2030;
// const app = express();
// app.use(express.json());
// app.get("/", (req, res) => {
//   try {
//     return res.status(200).json({
//       message: "server is fine and working",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
// app.listen(port, () => {
//   console.log("server is now connected to port", port);
// });
