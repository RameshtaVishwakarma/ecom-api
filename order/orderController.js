const orderService = require("./orderService.js");

const updateStatus = async (req, res) => {
  const id = req.params.id;
  const userRole = req.body.decodedToken.roles;
  const { order_status } = req.body;
  try {
    const response = await orderService.updateStatus(
      id,
      userRole,
      order_status
    );
    if (error) {
      throw error;
    }
    res.status(200).json({
      status: "success",
      message: "Data successfully updated!",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "unsuccessfull",
      message: `only admin can update order status to ${order_status}`,
    });
  }
};

module.exports = {
  updateStatus,
};
