require("./db/main");       // kicks off default connection
require("./db/products");   // kicks off productsConn

const express       = require("express");
const cors          = require("cors");

const productsRouter= require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/products",      productsRouter);

app.listen(5001, () => console.log("🚀 Server on http://localhost:5001"));
