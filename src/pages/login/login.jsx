import "./login.css";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Email Address..."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Password..."
        />
        <button className="loginButton">Access</button>
      </form>
      <button className="registrationButton">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
}

export default login;
