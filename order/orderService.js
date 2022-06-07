const { pool } = require("../database");
const queries = require("./orderQueries.js");
const date = new Date();

const createNewOrder = async (user_id, prod_id) => {
  try {
    let order_id = 1;
    let order_status = "active";
    let items = prod_id;
    let createdBy = user_id;
    let totalPrice = 100;

    await pool.query(queries.createNewOrder, [
      order_id,
      order_status,
      items,
      totalPrice,
      createdBy,
    ]);
    return {
      data: null,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error: "order not created!",
    };
  }
};

const updateStatus = async (id, userRole, order_status) => {
  try {
    if (userRole === "admin") {
      await pool.query(queries.updateOrderStatus, [order_status, id]);
      return {
        data: null,
        error: null,
      };
    } else {
      return {
        data: null,
        error: `only admin can update order status to ${order_status}`,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error: error,
    };
  }
};
module.exports = {
  updateStatus,
  createNewOrder,
};
