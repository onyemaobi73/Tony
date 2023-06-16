const express = require("express");
require("./Config/Database")
const port = 2030;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  try {
    return res.status(200).json({
      message: "server is now ready for consumption",
    });
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log("server is up and running", port);
});

// const express = require("express");
// const port = 2030;
// const app = express();
// app.use(express.json());
// app.get("/", (req, res) => {
//   try {
//     return res.status(200).json({
//       message: "server is now ready for consumption",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
// app.listen(port, () => {
//   console.log("server is up and running", port);
// });
