import { useState } from "react";
import axios from "axios";

function CreateForum() {
  const [groupName, setGroupName] = useState("");

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  async function handleCreateGroup(e) {
    e.preventDefault();
    const userID = user._id;
    const group = { name: groupName, members: [userID] };

    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/groups",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: group,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form>
      <h2>Create a group</h2>
      <div className="group-input">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.name}
          readOnly={true}
        />
      </div>
      <div className="group-input">
        <label htmlFor="groupName">Group Name</label>
        <input
          type="text"
          id="groupName"
          name="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>
      <button onClick={handleCreateGroup}>Create Group</button>
    </form>
  );
}

export default CreateForum;
