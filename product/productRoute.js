const express = require("express");
const auth = require("../middleware/auth.js");
const controller = require("./productController.js");

const router = express.Router();

//Creating a new product
router.post("/", auth, controller.createNewProduct);

//Update product status
router.patch("/:id", auth, controller.updateProductstatus);

//Delete Product
router.delete("/:id", auth, controller.deleteProduct);

//update product
router.patch("/update/:id", auth, controller.updateProduct);

//buy product
router.get("/buy", auth, controller.buyProduct);

module.exports = router;
