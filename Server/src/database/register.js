const { MongoClient } = require("mongodb");
const { client } = require("./connect");
require("dotenv").config();

async function register({
  username,
  phoneNumber,
  email,
  password,
  address,
  age,
  gender,
  emergencyContact,
  guardianNumber,
}) {
  const Client = client();
  try {
    const database = Client.db(process.env.MONGODB_DB);
    const users = database.collection("users");

    // Query to check if the username already exists
    const usernameQuery = {
      email: email,
    };

    // Check if the username (email) already exists
    const existingUser = await users.findOne(usernameQuery);
    if (existingUser) {
      return { error: "El usuario ya existe" };
    }

    // If the username doesn't exist, proceed to create the new user
    const newUser = {
      username,
      phoneNumber,
      email,
      password,
      address,
      age,
      gender,
      emergencyContact,
      guardianNumber,
    };

    const result = await users.insertOne(newUser);

    if (result.insertedCount === 1) {
      return { success: "Usuario registrado con éxito" };
    } else {
      return { error: "Error al registrar el usuario" };
    }
  } catch (err) {
    console.error(err);
    return { error: "Error en el servidor" };
  } finally {
    await Client.close();
  }
}

module.exports = {
  register,
};
