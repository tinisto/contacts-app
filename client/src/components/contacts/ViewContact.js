import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { fetchContactById } from "../../api/index"

const ViewContact = () => {
  const { id } = useParams()
  const [state, setState] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getData(id)
  }, [])

  const getData = async (id) => {
    const result = await fetchContactById(id)
    setState(result.data)
  }
  return (
    <>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-3">
              <p className="h3 text-center">Info</p>
              <pre>{JSON.stringify(state, null, 2)}</pre>
              <button
                onClick={() => navigate(-1)}
                className="btn btn-outline-success"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ViewContact
