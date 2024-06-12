import {
  FaEnvelope,
  FaLocationPin,
  FaLock,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Error from "../Layout/Error";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [problem, setProblem] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");

  // const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState(false);

  // to help navigate the user back to the home page - this returns a function that takes a url (as a string)
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();

    if (confPassword !== password) return alert("Passwords dont't match");
    if (password.length < 8)
      return alert("Password length must be greater than 8");

    const user = {
      name: username,
      email,
      phone: telephone,
      address,
      problem,
      password,
      passwordConfirm: confPassword,
    };

    Object.values(user).map((field) => {
      return field === "" && setError(!error);
    });

    try {
      const res = await axios({
        method: "POST",
        url: "https://companion-backend.onrender.com/api/v1/users/signup",
        // url: "http://localhost:4000/api/v1/users/signup",
        data: user,
      });
      console.log(res);

      console.log(res.status, "then", res.statusText);

      alert(`Account created successfully! 🤗 Welcome ${username}`);
      // setIsSignedUp(true);
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <form action="" className="form">
      <div className="form-head">
        <h1>Signup</h1>
        <p>Hello there 👋. You're welcome</p>
      </div>
      <div className="form-inputs">
        <label htmlFor="username">{<FaUser className="label" />}</label>
        <input
          required
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="email">{<FaEnvelope className="label" />}</label>
        <input
          required
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="telephone">{<FaPhone className="label" />}</label>
        <input
          type="text"
          placeholder="Telephone"
          id="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="address">
          <FaLocationPin className="label" />
        </label>
        <input
          type="address"
          placeholder="Address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="form-inputs">
        <select
          name="problem"
          id="problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        >
          <option value="">Choose your problem type</option>
          <option value="life">Life</option>
          <option value="time">Time Management</option>
          <option value="distraction">Distraction</option>
          <option value="health">Health Issues</option>
          <option value="motivation">Motivation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-inputs">
        <label htmlFor="password">{<FaLock className="label" />}</label>
        <input
          required
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="confirm">{<FaLock className="label" />}</label>
        <input
          required
          type="password"
          placeholder="Confirm Password"
          id="confirm"
          value={confPassword}
          onChange={(e) => setconfPassword(e.target.value)}
        />
      </div>
      <p className="other-form">
        Already have an account?
        <Link className="change-form" to="/auth/login">
          Login
        </Link>
      </p>
      <FormButton children="Signup" onClick={handleSignup} />

      {/* moving the user to the home page after they are logged in */}
    </form>
  );
}

export default Signup;
