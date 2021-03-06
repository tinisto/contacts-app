import axios from "axios"

// const url = "https://crud-app-react-node.herokuapp.com/contacts"
// const url = "http://localhost:3001/contacts"
const url = `${process.env.REACT_APP_API_URL}/contacts`

export const fetchAllContacts = () => axios.get(url)
export const fetchContactById = (id) => axios.get(`${url}/${id}`)
export const fetchCreateContact = (newContact) => axios.post(url, newContact)
export const deleteContact = (id) => axios.delete(`${url}/${id}`)
export const fetchUpdateContact = (id, updatedPost) =>
  axios.put(`${url}/edit/${id}`, updatedPost)
