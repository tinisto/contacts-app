const express = require("express")
const router = express.Router()
const { getAllContacts } = require("../controllers/contact.js")

router.get("/", getAllContacts)

module.exports = router
