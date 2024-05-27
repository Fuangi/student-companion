import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateGoal() {
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  function handleCreateGoal(e) {
    e.preventDefault();

    const newGoal = {
      goal,
      category,
    };

    try {
      axios.post("http://localhost:4000/api/v1/goals", {
        data: newGoal,
        headers: {
          "content-type": "application/json",
          mode: "cors",
        },
      });
      setTimeout(() => {
        alert("Goal created successfully");
        navigate("/goals");
      }, 5000);
    } catch (error) {
      console.log("Failed to create goal", error);
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
