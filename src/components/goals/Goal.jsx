import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";

function Goal() {
  const [searchParams] = useSearchParams();
  const goalId = searchParams.get("goalId");

  const editUrl = `/goals/edit?id=${goalId}`;
  const deleteUrl = `/goals/delete?id=${goalId}`;

  return (
    <div className="goal-card">
      <p>This is my goal that I'll so something relating to bla bla bla</p>
      <Link to={deleteUrl}>
        <MdDelete className="delete" />
      </Link>
      <Link to={editUrl}>
        <MdEdit className="edit" />
      </Link>
    </div>
  );
}

export default Goal;
