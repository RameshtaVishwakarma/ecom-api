const { pool } = require("../database");
const queries = require("./userQueries.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("./userService.js");

const deleteUserById = async (req, res) => {
  const userRole = req.body.decodedToken.roles;
  const id = parseInt(req.params.id);
  try {
    const response = await userService.deleteUserById(id, userRole);
    const { error } = response;
    if (error) {
      throw error;
    }
    res.status(200).json({
      status: "success",
      message: "user deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "unsuccessfull",
      message: error,
    });
  }
};

const registerUser = async (req, res) => {
  try {
    const { user_id, name, email, password, role } = req.body;
    console.log(user_id);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(queries.registerUser, [
      user_id,
      name,
      email,
      hashedPassword,
      role,
    ]);
    res.status(200).json({
      status: "success",
      message: "User Successfully registered",
    });
  } catch (error) {
    console.log(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query(queries.selectUserById, [email]);
    if (user.rows.length === 0)
      return res.status(401).json({
        status: "error",
        message: "email is incorrect",
      });
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword)
      return res.status(401).json({
        status: "error",
        message: "password is incorrect",
      });
    const token = jwt.sign(user.rows[0], "secretString", {
      expiresIn: 3600, //1 hour
    });
    return res.status(401).json({
      status: "Success",
      message: "Login Successfull",
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteUserById,
  registerUser,
  userLogin,
};
