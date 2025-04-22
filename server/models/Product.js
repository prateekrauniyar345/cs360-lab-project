const mongoose = require("mongoose");
const productsConn = require("../db/products");

const productSchema = new mongoose.Schema(
  {},                     // or list fields if you prefer
  { collection: "product-items", strict: false }
);

module.exports = productsConn.model("Product", productSchema);
