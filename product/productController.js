const productService = require("./productService.js");

const createNewProduct = async (req, res) => {
  const userRole = req.body.decodedToken.roles;
  const { prod_id, prod_status, title, pictureUrl, createdBy } = req.body;
  try {
    const response = await productService.createNewProduct(
      prod_id,
      prod_status,
      title,
      pictureUrl,
      createdBy,
      userRole
    );
    const { error } = response;
    if (error) {
      throw error;
    }
    res.status(200).json({
      status: "success",
      message: "Data successfully added in database!",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "unsuccessfull",
      message: error,
    });
  }
};

const updateProductstatus = async (req, res) => {
  const id = req.params.id;
  const userRole = req.body.decodedToken.roles;
  const { prod_status } = req.body;
  try {
    const response = await productService.updateProductStatus(
      id,
      userRole,
      prod_status
    );
    const { error } = response;
    if (error) {
      throw error;
    }
    res.status(200).json({
      status: "success",
      message: "Data successfully updated!",
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      status: "unsuccessfull",
      message: error,
    });
  }
};

const updateProduct = async (req, res) => {
  const userRole = req.body.decodedToken.roles;
  const { prod_id, prod_status, title, pictureUrl, createdBy } = req.body;
  const id = req.params.id;
  try {
    const resposne = await productService.updateProduct(
      prod_id,
      prod_status,
      title,
      pictureUrl,
      createdBy,
      userRole,
      id
    );
    const { error } = resposne;
    if (error) {
      throw error;
    }
    res.status(200).json({
      success: "success",
      message: "Product updated successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: 0,
      error: err,
    });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const userRole = req.body.decodedToken.roles;
  try {
    const response = await productService.deleteProduct(id, userRole);
    const { error } = response;
    if (error) {
      throw error;
    }
    res.status(200).json({
      status: "success",
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(401).json({
      status: "unsuccessfull",
      message: error,
    });
  }
};

const buyProduct = async (req, res) => {
  const user_id = req.body.decodedToken.user_id;
  const prod_id = req.body.prod_id;
  try {
    const response = await productService.buyProduct(user_id, prod_id);
    const { error } = response;
    if (error) {
      throw error;
    }
    res.status(200).json({
      success: "success",
      message: "Order created successfully",
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      success: 0,
      error: err,
    });
  }
};

module.exports = {
  createNewProduct,
  updateProductstatus,
  deleteProduct,
  updateProduct,
  buyProduct,
};
