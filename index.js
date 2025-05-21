const express = require("express")
const app = express()
const dbConnection = require("./config/config.js")
const router = require("./routes/task")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/", router)

dbConnection()

const PORT = 3000
app.listen(PORT, () => console.log(`La aplicación está escuchando en el puerto http://localhost:${PORT}`))