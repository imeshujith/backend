const express = require("express");
const cors = require("cors");
const app = express();

let coreOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(coreOptions));
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

const router = require("./routes/employeeRoutes.js");
app.use("/api/employees", router);

app.get("/", (req, res) => {
  res.json("working");
});

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
