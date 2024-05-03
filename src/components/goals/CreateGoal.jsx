function CreateGoal() {
  return (
    <form className="create-goal-form">
      <h2>Create a new goal...</h2>
      <label htmlFor="goalTitle">Goal Title</label>
      <input type="text" placeholder="What would you call these goals?..." />
      <label htmlFor="goals">Goals</label>
      <textarea name="goals" id="goals" cols="30" rows="10">
        Your goals here...
      </textarea>
      <button>Create Goal</button>
    </form>
  );
}

export default CreateGoal;
