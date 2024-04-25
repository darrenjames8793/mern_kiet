const express = require("express");

const userController = require('../controllers/userController.js');

const userRouter = express.Router();

userRouter.route('/')
          .get(userController.getAllUsers)
          .post(userController.addUser); 
          
userRouter.route('/:id')
          .get(userController.getUserById)
          .put(userController.updateUser)
          .delete(userController.deleteUser);         
 
module.exports = userRouter;