import { Link } from "react-router-dom";
import "./pageTop.css";
import pic from "../../pictures/pic.png";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaSearch,
} from "react-icons/fa";

export default function PageTop() {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <a className="socialIcon" href="https://facebook.com/KierV76/">
          <FaFacebookSquare />
        </a>
        <a
          className="socialIcon"
          href="https://www.linkedin.com/in/kier-turpin-64502122b/"
        >
          <FaLinkedin />
        </a>
        <a className="socialIcon" href="https://www.instagram.com/kier_penny/">
          <FaInstagram />
        </a>
        <a className="socialIcon" href="https://twitter.com/KierVa16">
          <FaTwitter />
        </a>
      </div>
      <div className="topCenter">
        <ul className="listContainer">
          <li className="listItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="listItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImage" src={pic} alt="me" />
        ) : (
          <ul className="listContainerR">
            <li className="listItemR">
              <Link to="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="listItemR">
              <Link to="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="searchIcon">
          <FaSearch />
        </i>
      </div>
    </div>
  );
}
