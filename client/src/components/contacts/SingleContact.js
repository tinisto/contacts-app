import { Link } from "react-router-dom"
import { BsPencil, BsTrash, BsEye } from "react-icons/bs"

const SingleContact = ({ contact }) => {
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-2 align-self-center">
                <p className="h3">ID</p>
                <p className="h3">{contact.id}</p>
              </div>
              <div className="col-md-8">
                <p>
                  First Name:{" "}
                  <span className="fw-bold">{contact.first_name}</span>
                </p>
                <p>
                  Last Name:{" "}
                  <span className="fw-bold">{contact.last_name}</span>
                </p>
                <p>
                  Occupation:{" "}
                  <span className="fw-bold">{contact.occupation}</span>
                </p>
                <p>
                  Phone: <span className="fw-bold">{contact.phone}</span>
                </p>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center justify-content-evenly">
                <Link to={`${contact.id}`} className="btn btn-primary">
                  <BsEye />
                </Link>

                <Link to={`edit/${contact.id}`} className="btn btn-warning">
                  <BsPencil />
                </Link>

                <button className="btn btn-danger">
                  <BsTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleContact
