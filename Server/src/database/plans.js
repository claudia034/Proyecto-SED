const { MongoClient, ObjectId } = require("mongodb");
const { client } = require("./connect");
require("dotenv").config();

async function getplans() {
  const Client = client();
  try {
    const database = Client.db(process.env.MONGODB_DB);
    const movies = database.collection("plans");
    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const movie = await movies.find(query).toArray();
    console.log(movie);
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

async function createplans(plan) {
  const Client = client();
  try {
    const database = Client.db(process.env.MONGODB_DB);
    const plans = database.collection("plans");
    const result = await plans.insertOne(plan);
    console.log(result);
    if (result) {
      return true;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    await Client.close();
  }
}

async function editPlans(data) {
  console.log("En database", data);
  const Client = client();
  const filtro = { _id: new ObjectId(data._id) };
  const nuevoValor = {
    $set: {
      nombre: data.nombre,
      descripcion: data.descripcion,
      precio: data.precio,
    },
  };

  try {
    const database = Client.db(process.env.MONGODB_DB);
    const plans = database.collection("plans");
    const result = await plans.updateOne(filtro, nuevoValor, (err, result) => {
      if (err) throw err;

      console.log(
        `Documento actualizado: ${result.modifiedCount} documento(s) modificado(s)`
      );
      client.close();
    });

    console.log(result);
    if (result) {
      return true;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    await Client.close();
  }
}

module.exports = {
  getplans,
  createplans,
  editPlans,
};
