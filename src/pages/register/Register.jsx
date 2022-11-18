import "./register.css";
import { Link } from "react-router-dom";

function register() {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Username..."
        />

        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Email Address..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Password..."
        />
        <button className="registerButton">Submit</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
}

export default register;
