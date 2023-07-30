const userHandler = require("../Handler/userHandler");
const express = require("express");
const router = express.Router();

router.get("/createUser", userHandler.CreateUser);
