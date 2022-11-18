import "./singlePost.css";
import Eight from "../../pictures/pic8.png";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function singlePost() {
  return (
    <div className="singlePost">
      <div className="postWrapper">
        <img className="postImg" src={Eight} alt="" />
        <h1 className="postTitle">
          Lorem ipsum dolor sit amet
          <div className="postEdit">
            <i className="singleIcons">
              <FaUserEdit />
            </i>

            <i className="singleIcons">
              <MdDeleteForever />
            </i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="Author">
            Author: <b>Kier</b>
          </span>
          <span className="timeStamp">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          cupiditate consequuntur, assumenda exercitationem velit amet quis
          reprehenderit culpa officiis, expedita unde nisi. Eos, dicta labore
          reiciendis ipsa animi laudantium aperiam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid cupiditate consequuntur,
          assumenda exercitationem velit amet quis reprehenderit culpa officiis,
          expedita unde nisi. Eos, dicta labore reiciendis ipsa animi laudantium
          aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid cupiditate consequuntur, assumenda exercitationem velit amet
          quis reprehenderit culpa officiis, expedita unde nisi. Eos, dicta
          labore reiciendis ipsa animi laudantium aperiam! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aliquid cupiditate consequuntur,
          assumenda exercitationem velit amet quis reprehenderit culpa officiis,
          expedita unde nisi. Eos, dicta labore reiciendis ipsa animi laudantium
          aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid cupiditate consequuntur, assumenda exercitationem velit amet
          quis reprehenderit culpa officiis, expedita unde nisi. Eos, dicta
          labore reiciendis ipsa animi laudantium aperiam! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aliquid cupiditate consequuntur,
          assumenda exercitationem velit amet quis reprehenderit culpa officiis,
          expedita unde nisi. Eos, dicta labore reiciendis ipsa animi laudantium
          aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid cupiditate consequuntur, assumenda exercitationem velit amet
          quis reprehenderit culpa officiis, expedita unde nisi. Eos, dicta
          labore reiciendis ipsa animi laudantium aperiam!
        </p>
      </div>
    </div>
  );
}

export default singlePost;
