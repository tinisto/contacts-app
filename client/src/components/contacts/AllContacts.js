import { fetchAllContacts } from "../../api/index.js"
import { useState, useEffect } from "react"

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
    </>
  )
}
export default AllContacts
