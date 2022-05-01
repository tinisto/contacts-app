const { Contacts } = require("../models")

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contacts.findAll()
    res.json(contacts)
  } catch (error) {
    console.error(error)
  }
}

const getContactById = async (req, res) => {
  const id = req.params.id
  try {
    const result = await Contacts.findByPk(id)
    res.json(result)
  } catch (error) {
    console.log(error)
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

const updateContact = async (req, res) => {
  const id = req.params.id
  const contact = req.body
  try {
    await Contacts.update(contact, { where: { id: id } })
    res.json("updated")
  } catch (error) {
    console.log(error)
  }
  await Contacts
}

module.exports = {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact,
  getContactById,
}
