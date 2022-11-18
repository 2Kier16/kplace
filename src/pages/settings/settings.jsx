import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Me from "../../pictures/me.png";
import { FaUserCircle } from "react-icons/fa";

function settings() {
  return (
    <div className="settings">
      <div className="settingsContainer">
        <div className="settingsTitle">
          <span className="updateTitle">Your Account</span>
          <span className="deleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="profilePicture">
            <img src={Me} alt="" />
            <label htmlFor="fileInput">
              <i className="fa-icon fa-upload  fa-fw">
                <FaUserCircle />
              </i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Name" />
          <label>Email</label>
          <input type="email" placeholder="user@Email.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Submit</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default settings;
