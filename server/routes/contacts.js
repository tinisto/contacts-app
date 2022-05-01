const express = require("express")
const router = express.Router()
const {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact,
} = require("../controllers/contact.js")

router.get("/", getAllContacts)
router.post("/", createContact)
router.delete("/:id", deleteContact)
router.put("/:id", updateContact)

module.exports = router
