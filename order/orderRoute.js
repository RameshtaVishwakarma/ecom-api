const express = require("express");
const auth = require("../middleware/auth.js");
const controller = require("./orderController.js");

const router = express.Router();

router.patch("/:id", auth, controller.updateStatus);

module.exports = router;
