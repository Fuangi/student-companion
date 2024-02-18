import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <nav className="auth-nav">
      <ul>
        <li>
          <NavLink to="signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
