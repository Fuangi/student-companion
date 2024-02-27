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

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");

  const [isSignedUp, setIsSignedUp] = useState(false);
  // const [isFilled, setIsFilled] = useState(false)

  // to help navigate the user back to the home page - this returns a function that takes a url (as a string)
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    if (password.length === 0 && email.length === 0 && username.length === 0)
      return alert(
        "Please fill out all the necessary fileds (name, email and password"
      );

    if (password !== confPassword) return alert("Passwords do not match");
    // using 3 for test cases
    if (password.length < 3)
      return alert("Password must have atleast 3 characters");

    alert(`Welcome ${username}`);

    setIsSignedUp(true);
  }

  /*   useEffect(
    function () {
      localStorage.setItem("user", JSON.stringify([username, email, password]));
    },
    [username, email, password]
  ); */

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
        <label htmlFor="address">{<FaLocationPin className="label" />}</label>
        <input
          type="address"
          placeholder="Address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
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
        <Link className="change-form" to="/authentication/login">
          Login
        </Link>
      </p>
      <FormButton children="Signup" onClick={handleSignup} />

      {/* moving the user to the home page after they are logged in */}
      {isSignedUp && navigate("/")}
    </form>
  );
}

export default Signup;
