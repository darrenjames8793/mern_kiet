const express = require("express");
const userController = require("../controllers/productsController.js");

const userRouter = express.Router();

userRouter.route("/").get(userController.getUser);

module.exports = userRouter;
