const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const cors = require("cors")
const db = require("./models")
const path = require("path")

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"))
//   app.get("/*", (req, res) => {
//     req.sendFile(path.resolve(__dirname, "build", "index.html"))
//   })
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
// })

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")))
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"))
  })
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.options("*", cors())
// app.use("/public", express.static(path.join(__dirname, "public")))

//routes
const ContactRouter = require("./routes/contacts.js")
app.use("/api/contacts", ContactRouter)

app.get("/", (req, res) => {
  res.send("APP IS RUNNING.")
})

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
  })
})
