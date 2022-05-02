import { useState } from "react"
import { useNavigate } from "react-router-dom"
const { fetchCreateContact } = require("../../api/index")

const NewContact = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    occupation: "",
    phone: "",
  })

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    newContact(state)
    setState({
      first_name: "",
      last_name: "",
      occupation: "",
      phone: "",
    })
    navigate("/contacts")
  }

  const newContact = async (state) => {
    try {
      await fetchCreateContact(state)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1 className="text-center">Create Contact</h1>

              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label
                    htmlFor="first_name"
                    className="form-label"
                    placeholder="Type First Name"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    id="first_name"
                    value={state.first_name}
                    onChange={changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="last_name"
                    className="form-label"
                    placeholder="Type Last Name"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    id="last_name"
                    value={state.last_name}
                    onChange={changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="occupation"
                    className="form-label"
                    placeholder="Type Occupation"
                  >
                    Occupation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="occupation"
                    id="occupation"
                    value={state.occupation}
                    onChange={changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="phone"
                    className="form-label"
                    placeholder="Type Phone"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    id="phone"
                    value={state.phone}
                    onChange={changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default NewContact
