const { MongoClient } = require("mongodb");
const { client } = require("./connect");
require("dotenv").config();

async function login({ email, password }) {
  const Client = client();
  try {
    const database = Client.db(process.env.MONGODB_DB);
    const movies = database.collection("users");
    // Query for a movie that has the title 'Back to the Future'
    const query = {
      email,
    };
    const movie = await movies.findOne(query);
    if (movie) {
      if (movie.password == password) {
        return movie;
      }
      return null;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    // Ensures that the Client will close when you finish/error
    await Client.close();
  }
}

async function UserName({ email }) {
  const Client = client();
  try {
    const database = Client.db(process.env.MONGODB_DB);
    const movies = database.collection("users");
    // Query for a movie that has the title 'Back to the Future'
    const query = {
      email,
    };
    const movie = await movies.findOne(query);
    if (movie) {
      return movie;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    // Ensures that the Client will close when you finish/error
    await Client.close();
  }
}

module.exports = {
  login,
  UserName,
};
