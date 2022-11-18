import "./post.css";
import egypt1 from "../../pictures/egypt1.png";

function post() {
  return (
    <div className="post">
      <img className="postImg" src={egypt1} />
      <div className="postInfo">
        <div className="categories">
          <span className="postCat">Latte Art</span>
          <span className="postCat">Hobbies</span>
          <span className="postCat">Sports</span>
          <span className="postCat">Music</span>
          <span className="postCat">Code & Tech</span>
          <span className="postCat">Everything Else</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">October 2, 2022</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolorem
        error eveniet aspernatur omnis suscipit saepe, molestias nesciunt
        ducimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
        dolorem error eveniet aspernatur omnis suscipit saepe, molestias
        nesciunt ducimus.Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Autem dolorem error eveniet aspernatur omnis suscipit saepe,
        molestias nesciunt ducimus.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Autem dolorem error eveniet aspernatur omnis suscipit
        saepe, molestias nesciunt ducimus.Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Autem dolorem error eveniet aspernatur
        omnis suscipit saepe, molestias nesciunt ducimus.
      </p>
    </div>
  );
}

export default post;
