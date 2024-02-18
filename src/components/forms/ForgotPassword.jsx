import { FaEnvelope } from "react-icons/fa6";
import FormButton from "./FormButton";
function ForgotPassword() {
  return (
    <form action="" className="form">
      <div className="form-head">
        <h1>Reset Password</h1>
        <p>Enter your email below to get a password reset link</p>
      </div>
      <div className="form-inputs">
        <label htmlFor="email">{<FaEnvelope className="label" />}</label>
        <input type="email" placeholder="Email" id="email" />
      </div>
      <FormButton children="Reset" />
    </form>
  );
}

export default ForgotPassword;
