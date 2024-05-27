import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";

function Goal({ goal }) {
  const [searchParams] = useSearchParams();
  const goalId = searchParams.get("goalId");

  const editUrl = `/goals/edit?id=${goalId}`;
  const deleteUrl = `/goals/delete?id=${goalId}`;

  return (
    <div className="goal-card">
      <p>{goal}</p>
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
