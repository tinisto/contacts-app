import { fetchAllContacts, deleteContact } from "../../api/index.js"
import { useState, useEffect } from "react"
import { BsPlusCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import SingleContact from "./SingleContact"
import axios from "axios"

const AllContacts = () => {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await fetchAllContacts()
    setContacts(result.data)
  }

  const handleDelete = async (id) => {
    try {
      await deleteContact(id)
      setContacts(contacts.filter((contact) => contact.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className="p-3">
        <div className="containter">
          <div className="row">
            <div className="col">
              <p className="h1 text-center fw-bold text-primary">
                Contact Management{" "}
                <Link to="new" className="btn btn-primary">
                  <BsPlusCircle className="me-2" />
                  New
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-3">
        <div className="container">
          <div className="row">
            {contacts.length > 0 ? (
              <>
                <p className="fst-italic text-center">
                  In DataBase now
                  <span className="fw-bold text-danger">
                    {" "}
                    {contacts.length}{" "}
                  </span>
                  {contacts.length === 1 ? "contact" : "contacts"}.
                </p>
                {contacts.map((contact) => (
                  <SingleContact
                    key={contact.id}
                    contact={contact}
                    handleDelete={handleDelete}
                  />
                ))}
              </>
            ) : (
              <>
                <p className="h3">DataBase is empty.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
export default AllContacts
