import axios from "axios"

const url = "http://localhost:3001/contacts"

export const fetchAllContacts = () => axios.get(url)
export const fetchContactById = (id) => axios.get(`${url}/${id}`)
export const fetchCreateContact = (newContact) => axios.post(url, newContact)
export const deleteContact = (id) => axios.delete(`${url}/${id}`)
export const fetchUpdateContact = (id, updatedPost) =>
  axios.put(`${url}/edit/${id}`, updatedPost)
