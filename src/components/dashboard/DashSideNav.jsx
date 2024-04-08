import { NavLink } from "react-router-dom";

function DashSideNav() {
  return (
    <ul className="dash-side">
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/planner">Plans</NavLink>
      </li>
      <li>
        <NavLink to="/forums">Forums</NavLink>
      </li>
      <li>
        <NavLink to="#">Files</NavLink>
      </li>
      <li>
        <NavLink to="#">Trash</NavLink>
      </li>
    </ul>
  );
}

export default DashSideNav;
