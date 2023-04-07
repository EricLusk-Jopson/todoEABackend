const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

// attempt connection to mongoDB
connectDB();

// initialize express
const app = express();

// middleware for handling JSON data
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// routing for todos API
app.use("/todos", require("./routes/todoRoutes"));

// serve frontend

app.listen(3001, () => console.log("server started on port 3001"));
