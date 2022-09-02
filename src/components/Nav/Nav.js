import { NavLink, Link } from "react-router-dom"
import withRouter from "../../utils/withRouter"
import './Nav.css'

const Nav = ({ router }) => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "link__active" : undefined}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/rod" className={({ isActive }) => isActive ? "link__active" : undefined}>
          About Rod
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/bruno" className={({ isActive }) => isActive ? "link__active" : undefined}>
          About Bruno
        </NavLink>
      </li>
      <li>
        <Link to="/logout">
          Logout
        </Link>
      </li>
      <li>
        <button onClick = {()=> router.navigate(-1)}>
          Go back
        </button>
      </li>
    </ul>
  )
}

export default withRouter(Nav)