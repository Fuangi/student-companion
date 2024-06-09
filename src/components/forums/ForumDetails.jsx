import { Link } from "react-router-dom";

function ForumDetails({ group }) {
  return (
    <div className="forum-intro">
      {/* <img src={forumPicture} alt="Forum's Profile" /> */}
      <Link className="forum-info" to={`/forums/view?id=${group._id}`}>
        <h3>{group.name}</h3>
        <p>Chat Desc</p>
      </Link>
    </div>
  );
}

export default ForumDetails;
