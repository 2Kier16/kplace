import "./write.css";
import { AiFillCamera } from "react-icons/ai";
import Desert from "../../pictures/desert.png";

function write() {
  return (
    <div className="write">
      <img className="writeImg" src={Desert} alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="FileInput">
            <i className="w-icon fa fa-upload  fa-fw">
              <AiFillCamera />
            </i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />

          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Description..."
            type="text"
            className="writeInputText"
          />
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default write;
