import "./header.css";
import egypt from "../../pictures/egypt.png";

export default function Header(options) {
  return (
    <div className="header">
      <div className="titles">
        <span className="titleSm">Coffee & Caps</span>
        <span className="titleLg">Blog</span>
      </div>
      <img className="headerImg" src={egypt} alt="egyptPicture" />
    </div>
  );
}
