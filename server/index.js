const { urlencoded } = require("express")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const cors = require("cors")

app.use(express.json())
app.use(express(urlencoded({ extended: true })))
app.use(cors())

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
