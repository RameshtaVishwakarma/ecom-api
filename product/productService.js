const { pool } = require("../database");
const queries = require("./productQueries.js");
const orderService = require("../order/orderService.js");

const createNewProduct = async (
  prod_id,
  prod_status,
  title,
  pictureUrl,
  createdBy,
  userRole
) => {
  if (userRole === "admin" || userRole === "vendor") {
    await pool.query(queries.createNewProduct, [
      prod_id,
      prod_status,
      title,
      pictureUrl,
      createdBy,
    ]);
    return {
      data: null,
      error: null,
    };
  } else {
    return {
      data: null,
      error: "only admin or vendor can create a product",
    };
  }
};

const updateProductStatus = async (id, userRole, prod_status) => {
  if (
    prod_status === "readyForListing" &&
    (userRole === "admin" || userRole === "vendor")
  ) {
    await pool.query(queries.updateProductStatus, [prod_status, id]);
    return {
      data: null,
      error: null,
    };
  } else if (
    prod_status === "active" ||
    (prod_status === "Inactive" && userRole === "admin")
  ) {
    await pool.query(queries.updateProductStatus, [prod_status, id]);
    return {
      data: null,
      error: null,
    };
  } else {
    return {
      data: null,
      error: `only admin or vendor can update prod status to ${prod_status}`,
    };
  }
};

const updateProduct = async (
  prod_id,
  prod_status,
  title,
  pictureUrl,
  createdBy,
  userRole,
  id
) => {
  if (userRole === "admin" || userRole === "vendor") {
    await pool.query(queries.updateProductById, [
      prod_id,
      prod_status,
      title,
      pictureUrl,
      createdBy,
      id,
    ]);
    return {
      data: null,
      error: null,
    };
  } else {
    return {
      data: null,
      error: "only admin or vendor can update a product",
    };
  }
};

const deleteProduct = async (id, userRole) => {
  if (userRole === "admin") {
    await pool.query(queries.deleteProduct, [id]);
    return {
      data: null,
      error: null,
    };
  } else {
    return {
      data: null,
      error: "only admin can delete a product",
    };
  }
};

const buyProduct = async (user_id, prod_id) => {
  try {
    const response = await orderService.createNewOrder(user_id, prod_id);
    const { error } = response;
    if (error) {
      return {
        data: null,
        error: error,
      };
    }
    return {
      data: null,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error: error,
    };
  }
};

module.exports = {
  createNewProduct,
  updateProductStatus,
  deleteProduct,
  updateProduct,
  buyProduct,
};
