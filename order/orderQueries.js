const updateOrderStatus = `UPDATE product SET prod_status = $1 WHERE prod_id = $2`;
const createNewOrder = `INSERT INTO order_table (order_id, order_status, items, totalPrice, createdBy) VALUES ($1,$2,$3,$4,$5)`;

module.exports = {
  updateOrderStatus,
  createNewOrder,
};
