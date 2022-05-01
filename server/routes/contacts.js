const express = require("express")
const router = express.Router()
const {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact,
  getContactById,
} = require("../controllers/contact.js")

router.get("/", getAllContacts)
router.get("/:id", getContactById)
router.post("/", createContact)
router.delete("/:id", deleteContact)
router.put("/:id", updateContact)

module.exports = router
