import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function ForumDetails({ group }) {
  const { socket } = useSelector((store) => store.message);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id;

  function handleJoinGroup() {
    if (socket === null) return;
    socket.emit("joinGroup", { groupId: group._id, userId });
  }

  return (
    <div className="forum-intro">
      {/* <img src={forumPicture} alt="Forum's Profile" /> */}
      <button onClick={handleJoinGroup}>
        <NavLink className="forum-info" to={`/forums/view?id=${group._id}`}>
          <h3>{group.name}</h3>
          <p>{group.description}</p>
        </NavLink>
      </button>
    </div>
  );
}

export default ForumDetails;
