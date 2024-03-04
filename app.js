const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { reqLogger } = require("./configs/logger");
const errorHandlerMiddleware = require("./middleware/errorHandler.middleware");
const app = express();
const routes = require("./routes");


app.post(bodyParser.raw({ type: "application/json" }));
app.use(cookieParser());
app.use(express.json({ limit: "100mb" }));
app.use(cors());
app.use(reqLogger);
app.use("/api", routes);
app.use(errorHandlerMiddleware);


module.exports = app;
