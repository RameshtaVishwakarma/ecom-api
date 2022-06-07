const { pool } = require("../database");
const queries = require("./userQueries.js");

const deleteUserById = async (id, userRole) => {
  try {
    if (userRole === "admin") {
      await pool.query(queries.deleteUser, [id]);
      return {
        data: null,
        error: null,
      };
    }
    return {
      data: null,
      error: "user is not admin",
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
  deleteUserById,
};
