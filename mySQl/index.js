const express = require("express");
const userRouter = require("./route/userRoute");
const connection = require("./server");
const app = express();
app.use(express.json());

//Route
app.use("/user", userRouter);

module.express = app;
