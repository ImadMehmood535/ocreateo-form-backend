const mongoose = require("mongoose");
const { logger } = require("../configs/logger");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.info(`Database connected on host ${conn.connection.host}`);
  } catch (error) {
    logger.error(`Error in db connection ${error}`);
  }
};

module.exports = connectDB;
