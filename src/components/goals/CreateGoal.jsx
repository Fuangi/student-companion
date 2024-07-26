import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateGoal() {
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  function handleCreateGoal(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);
    const user = JSON.parse(localStorage.getItem("user"));

    const newGoal = {
      goal,
      category,
      userId: user._id,
    };

    try {
      axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/goals",
        // url: "https://companion-backend.onrender.com/api/v1/goals",
        data: newGoal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTimeout(() => {
        alert(
          "Goal created successfully, refresh the page to view updated goals"
        );
        navigate("/goals");
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        alert("Sorry, failed to create goal");
        navigate("/goals");
      }, 1000);
    }
  }

  return (
    <form className="create-goal-form">
      <h2>Create a new goal...</h2>
      <label htmlFor="goal">Goal</label>
      <textarea
        name="goal"
        id="goals"
        cols="30"
        rows="10"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      >
        What's the goal?
      </textarea>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Goal Category</option>
        <option value="life">Life</option>
        <option value="educational">Educational</option>
        <option value="career">Career</option>
        <option value="other">Other</option>
      </select>
      <button onClick={handleCreateGoal}>Create Goal</button>
    </form>
  );
}

export default CreateGoal;
