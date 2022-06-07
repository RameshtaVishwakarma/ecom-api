const { Pool } = require("pg");

const pool = new Pool({
  user: "ecom_user",
  database: "ecom",
  password: "password",
  port: 5433,
  host: "localhost",
});

pool.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connect");
});

module.exports = { pool };
