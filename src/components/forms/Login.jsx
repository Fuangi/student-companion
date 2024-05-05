import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaEnvelope } from "react-icons/fa6";

import FormButton from "./FormButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // to help navigate the user back to the home page
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const userDetails = localStorage.getItem("user");
    const [username, userEmail, userPassword] = JSON.parse(userDetails);

    if (email === userEmail && password === userPassword) {
      alert(`Welcome ${username}`);
      setIsLoggedIn(true);
    } else {
      alert("No user was found with this information ☹️");
    }
  }

  return (
    <form action="" className="form">
      <div className="form-head">
        <h1>Login</h1>
        <p>Welcome back 🤗</p>
      </div>
      <div className="form-inputs">
        <label htmlFor="email">{<FaEnvelope className="label" />}</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="password">{<FaLock className="label" />}</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link to="/authentication/forgot-password" className="change-form">
        Forgot Password?
      </Link>
      <FormButton children="Login" onClick={handleLogin} />
      <p className="other-form">
        Don't have an account ?
        <Link className="change-form" to="/auth/signup">
          Signup
        </Link>
      </p>
      {/* moving the user to the home page after they are logged in */}
      {isLoggedIn && navigate("/")}
    </form>
  );
}

export default Login;
