import { NavLink, useLocation } from "react-router-dom";

function AuthNav() {
  const location = useLocation();
  // console.log(location);

  const pathname = Array.from(Object.entries(location)[0]);

  const authLocation = pathname[1].split("/");

  console.log(authLocation);
  return (
    <nav className="auth-nav">
      <ul>
        <li>
          <NavLink
            to={`${authLocation[2] === "auth" ? "signup" : "/auth/signup"}`}
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${authLocation[2] === "auth" ? "login" : "/auth/login"}`}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
