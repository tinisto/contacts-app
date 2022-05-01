const express = require("express")
const router = express.Router()
const {
  getAllContacts,
  createContact,
  deleteContact,
} = require("../controllers/contact.js")

router.get("/", getAllContacts)
router.post("/", createContact)
router.delete("/:id", deleteContact)

module.exports = router
