const { MongoClient } = require("mongodb");
require("dotenv").config();

function client() {
  return new MongoClient(process.env.MONGODB_CNN);
}

module.exports = {
  client,
};
