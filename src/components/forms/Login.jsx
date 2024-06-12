import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaEnvelope } from "react-icons/fa6";

import FormButton from "./FormButton";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // to help navigate the user back to the home page
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "")
      return alert("Please fill every field");

    const user = { email, password };

    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/users/login",
        // url: "https://companion-backend.onrender.com/api/v1/users/login",
        data: user,
        headers: {
          Authorization: "Bearer Token",
        },
      });

      if (res.status === 200) {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }

    console.log("Done executing");
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
      <Link to="/forgot-password" className="change-form">
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
      {/* {isLoggedIn && navigate("/")} */}
    </form>
  );
}

export default Login;
