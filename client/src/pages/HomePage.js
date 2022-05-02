import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="h1">CRUD App</p>
              <p>
                This <Link to="/contacts"> full stuck project</Link> done with
                React + Node.js + Express + MySQL
              </p>
              <Link to="https://github.com/tinisto/contacts-app">GitHub</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default HomePage
