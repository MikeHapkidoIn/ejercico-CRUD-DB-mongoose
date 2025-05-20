const mongoose = require("mongoose")
require("dotenv").config()

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("BBDD conectada correctamente")
  } catch (error) {
    console.error("Error al conectar", error)
  }
}

module.exports = dbConnection