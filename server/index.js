const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const cors = require("cors")
const db = require("./models")
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/public", express.static(path.join(__dirname, "public")))
//routes
const ContactRouter = require("./routes/contacts.js")
app.use("/contacts", ContactRouter)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
  })
})
