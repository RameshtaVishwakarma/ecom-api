const createNewProduct = `INSERT INTO product (prod_id,prod_status,title,pictureUrl,createdBy) VALUES ($1, $2, $3, $4,$5)`;
const updateProductStatus = `UPDATE product SET prod_status = $1 WHERE prod_id = $2`;
const deleteProduct = `DELETE from product WHERE prod_id = $1`;
const productExists = `select exists(select 1 from contact where id=$1)`;
const updateProductById = `UPDATE product SET prod_id = $1,prod_status = $2, title = $3,pictureUrl = $4, createdBy = $5 where prod_id = $6`;

module.exports = {
  createNewProduct,
  updateProductStatus,
  deleteProduct,
  productExists,
  updateProductById,
};
