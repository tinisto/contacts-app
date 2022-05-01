const SingleContact = ({ contact }) => {
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <p>
              First Name: <span className="fw-bold">{contact.first_name}</span>
            </p>
            <p>
              Last Name: <span className="fw-bold">{contact.last_name}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleContact
