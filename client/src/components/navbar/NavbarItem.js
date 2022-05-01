import { NavLink } from "react-router-dom"

const NavbarItem = ({ url }) => {
  return (
    <NavLink className="nav-link" to={url}>
      {url}
    </NavLink>
  )
}
export default NavbarItem
