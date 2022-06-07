const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.body.token;
  try {
    jwt.verify(token, "secretString", async (err, decoded) => {
      if (err) {
        console.log(err);
        res.json({ success: false, msg: "Unauthorized Access" });
      } else {
        req.body.decodedToken = decoded;
        next();
      }
    });
  } catch (error) {
    console.log(error);
  }
};
