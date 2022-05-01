import { fetchAllContacts } from "../../api/index.js"
import { useState, useEffect } from "react"

const AllContacts = () => {
  useEffect(() => {}, [])

  const getData = async () => {
    const result = await fetchAllContacts()
    console.log(result.data)
  }

  return <div>AllContacts</div>
}
export default AllContacts
