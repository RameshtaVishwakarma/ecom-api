const express = require("express");
const auth = require("../middleware/auth.js");
const controller = require("./userController.js");

const router = express.Router();

//Delete a user by id
router.delete("/:id", auth, controller.deleteUserById);

//Regsiter a new user
router.post("/register", controller.registerUser);

//Login an existng user
router.post("/login", controller.userLogin);

module.exports = router;
