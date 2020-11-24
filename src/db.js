const config = require("../config");
const mongoose = require("mongoose");

class DB {
  constructor() {
    mongoose
      .connect(
        `mongodb+srv://${config.DB.USERNAME}:${config.DB.PASSWORD}@${config.DB.HOST}/${config.DB.DATABASE}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log(`Connect to DB: ${config.DB.HOST} successfully`);
      })
      .catch((err) => {
        console.log(`Failed to connect to ${config.DB.HOST}`);
      });
    mongoose.connection.on("open", () => {
      this.connectionState.status = "OPEN";
    });
    mongoose.connection.on("error", (err) => {
      this.connectionState.status = "ERROR";
      this.connectionState.message = err;
    });
  }

  /**
   * @returns DB The singleton instance of database
   */
  static get instance() {
    if (this._instance == null) {
      this._instance = new DB();
    }
    return this._instance;
  }

  connectionState = {
    status: "Closed",
    message: "",
  };
}

module.exports = DB;
