function CreateGoal() {
  return (
    <form className="create-goal-form">
      <h2>Create a new goal...</h2>
      <label htmlFor="goalTitle">Goal Title</label>
      <input type="text" placeholder="What would you call these goals?..." />
      <label htmlFor="goals">Description</label>
      <textarea name="goals" id="goals" cols="30" rows="10">
        Anything you want to write about this goal?
      </textarea>
      <button>Create Goal</button>
    </form>
  );
}

export default CreateGoal;
