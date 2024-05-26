import { MdDelete, MdEdit } from "react-icons/md";

export function Goal() {
  return (
    <div className="goal-card">
      <p>This is my goal that I'll so something relating to bla bla bla</p>
      <button>
        <MdDelete className="delete" />
      </button>
      <button>
        <MdEdit className="edit" />
      </button>
    </div>
  );
}
