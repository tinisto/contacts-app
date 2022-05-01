const { Contacts } = require("../models")

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contacts.findAll()
    res.json(contacts)
  } catch (error) {
    console.error(error)
  }
}

const createContact = async (req, res) => {
  const contact = req.body
  try {
    await Contacts.create(contact)
    res.json(contact)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllContacts, createContact }
