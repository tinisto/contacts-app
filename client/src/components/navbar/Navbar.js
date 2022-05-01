import { NavLink } from "react-router-dom"
import NavbarItem from "./NavbarItem"

const Navbar = () => {
  const array = [{ id: 1, url: "contacts" }]
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        dark
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {array.map((item) => (
              <NavbarItem key={item.id} url={item.url} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
