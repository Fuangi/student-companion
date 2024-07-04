import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateForum() {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  async function handleCreateGroup(e) {
    e.preventDefault();
    const userID = user._id;
    const group = { name: groupName, admin: userID, description };

    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/groups",
        // url: "https://companion-backend.onrender.com/api/v1/groups",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: group,
      });

      if (res.status === 201) {
        alert("Group created successfully");
        navigate(`/forums/view?id=${res.data.data.data._id}`);
      }
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
      <div className="group-input">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          required={true}
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handleCreateGroup}>Create Group</button>
    </form>
  );
}

export default CreateForum;
