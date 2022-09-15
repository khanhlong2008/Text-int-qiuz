const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const intqiuz = require("./router");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/int-qiuz", intqiuz);
mongoose
  .connect("mongodb://localhost/int-qiuz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected database from mongodb.");
    app.listen(5000, () => {
      console.log(`Server is running on port 5000`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
