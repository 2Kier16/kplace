import keytar from "../../pictures/keytar.png";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaSearch,
} from "react-icons/fa";

import "./sidebar.css";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarInfo">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={keytar} alt="keyPic" />
        <p>
          I recently discovered that I like coffee, but I really Love the ART of
          the pour. Caps are just my thing. So why not create a blog and share
          it with the world. A place where you can share anything. I hope you
          enjoy reading and join the community.
        </p>
      </div>
      <div className="sidebarInfo">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarItem">Latte Art</li>
          <li className="sidebarItem">Hobbies</li>
          <li className="sidebarItem">Sports</li>
          <li className="sidebarItem">Music</li>
          <li className="sidebarItem">Code & Tech</li>
          <li className="sidebarItem">Everything Else</li>
        </ul>
      </div>
      <div className="sidebarInfo">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a className="sidebarIcon" href="https://facebook.com/KierV76/">
            <FaFacebookSquare />
          </a>
          <a
            className="sidebarIcon"
            href="https://www.linkedin.com/in/kier-turpin-64502122b/"
          >
            <FaLinkedin />
          </a>
          <a
            className="sidebarIcon"
            href="https://www.instagram.com/kier_penny/"
          >
            <FaInstagram />
          </a>
          <a className="sidebarIcon" href="https://twitter.com/KierVa16">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
