const express = require("express");
const bodyParser = require("body-parser");
const port = 5007;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userroutes = require("./user/userRoute");
const productroutes = require("./product/productRoute");
const orderroutes = require("./order/orderRoute");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to ECOM application." });
});

app.use("/user", userroutes);
app.use("/product", productroutes);
app.use("/order", orderroutes);

app.listen(port, () => {
  console.log(`server running on port: http://localhost:${port}`);
});
