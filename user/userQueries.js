const registerUser = `INSERT into user_table (user_id,name,email,password,roles) VALUES ($1,$2,$3,$4,$5)`;
const deleteUser = `Delete from user_table where user_id = $1`;
const selectUserById = `SELECT * FROM user_table where email = $1`;

module.exports = {
  registerUser,
  deleteUser,
  selectUserById,
};
