const { MongoClient } = require("mongodb");
const { client } = require("./connect");
require("dotenv").config();

async function login({ username, password }) {
  const Client = client();
  try {
    const database = Client.db(process.env.MONGODB_DB);
    const movies = database.collection("users");
    // Query for a movie that has the title 'Back to the Future'
    const query = {
      username,
    };
    console.log(query);
    const movie = await movies.findOne(query);
    if (movie) {
      return movie;
    } else {
      return {
        username: "Invalid credentials",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      username: "Invalid credentials",
    };
  } finally {
    // Ensures that the Client will close when you finish/error
    await Client.close();
  }
}

module.exports = {
  login,
};
