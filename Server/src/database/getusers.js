const { MongoClient } = require("mongodb");
const { client } = require("./connect");
require("dotenv").config();

async function getusers() {
  const Client = client();
  try {
    const database = Client.db(process.env.MONGODB_DB);
    const movies = database.collection("users");
    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const movie = await movies.find(query).toArray();
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
module.exports = getusers;
