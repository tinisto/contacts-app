import { fetchAllContacts } from "../../api/index.js"
import { useState, useEffect } from "react"
import { BsPlusCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import SingleContact from "./SingleContact"

const AllContacts = () => {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await fetchAllContacts()
    setContacts(result.data)
  }

  return (
    <>
      <pre>{JSON.stringify(contacts, null, 2)}</pre>
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
              <p className="fst-italic">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
                quas facilis. Ipsam consequuntur esse fugiat enim error modi
                qui, consequatur magni veritatis velit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-3">
        <div className="container">
          <div className="row">
            {contacts.map((contact) => (
              <SingleContact key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default AllContacts
