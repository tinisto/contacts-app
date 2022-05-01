const { urlencoded } = require("express")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const cors = require("cors")
const db = require("./models")

app.use(express.json())
app.use(express(urlencoded({ extended: true })))
app.use(cors())

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
  })
})
