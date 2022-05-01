const express = require("express")
const router = express.Router()
const { getAllContacts, createContact } = require("../controllers/contact.js")

router.get("/", getAllContacts)
router.post("/", createContact)

module.exports = router
