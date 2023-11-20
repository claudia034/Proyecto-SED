const { MongoClient } = require("mongodb");
const { client } = require("./connect");
require("dotenv").config();

async function updateprofile({ data, body }) {
  const Client = client();
  try {
    const database = Client.db(process.env.MONGODB_DB);
    const users = database.collection("users");
    console.log(data.email);
    const result = await users.findOneAndUpdate(
      { email: data.email },
      { $set: body.data },
      { returnDocument: "after" }
    );
    console.log(`${result} updated`);
    if (result) {
      return { success: "Usuario actualizado con éxito" };
    } else {
      return { error: "Error al actualizar el usuario" };
    }
  } catch (err) {
    console.error(err);
    return { error: "Error en el servidor" };
  } finally {
    await Client.close();
  }
}

module.exports = {
  updateprofile,
};
