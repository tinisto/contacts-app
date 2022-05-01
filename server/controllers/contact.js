const ContactModel = require("../models/ContactModel.js")

const getAllContacts = (req, res) => {
  res.send("contact router....!")
}

module.exports = { getAllContacts }
