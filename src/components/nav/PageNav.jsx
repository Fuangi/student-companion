import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Signin</NavLink>
        </li>
        <li>
          <NavLink to="/forums">Forums</NavLink>
        </li>
        <li>
          <NavLink to="/planner">Planner</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Resources</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
