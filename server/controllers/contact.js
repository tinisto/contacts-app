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

const deleteContact = async (req, res) => {
  const id = req.params.id
  try {
    await Contacts.destroy({ where: { id: id } })
    res.json("deleted")
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllContacts, createContact, deleteContact }
