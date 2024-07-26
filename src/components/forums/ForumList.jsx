import { Link } from "react-router-dom";
import ForumDetails from "./ForumDetails";
import { FaPlus } from "react-icons/fa6";

function ForumList({ groups }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="forum-list">
      <div className="list-header">Chats</div>
      <div className="user-details">
        <img src="" alt="Name" />
        <h3>{user.name}</h3>
        <p>status</p>
      </div>
      <div className="features">
        <input
          type="search"
          name="search"
          className="search"
          id="search"
          placeholder="Search..."
        />
        <div className="new-chat">
          <p>Forums</p>
          <Link to="/forums/create">
            <FaPlus />
          </Link>
        </div>
      </div>
      {groups?.length > 0 ? (
        groups.map((group, i) => <ForumDetails key={i} group={group} />)
      ) : (
        <p
          style={{
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          No Chats yet
        </p>
      )}
    </div>
  );
}

export default ForumList;
