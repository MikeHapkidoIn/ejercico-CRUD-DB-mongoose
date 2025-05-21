const mongoose = require("mongoose") // requerir mongo
require("dotenv").config() // accede al archivo .env

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("BBDD conectada correctamente")
  } catch (error) {
    console.error("Error de conexion", error)
  }
}

module.exports = dbConnection