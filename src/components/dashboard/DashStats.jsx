import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function DashStats({ name, icon, link, total }) {
  return (
    <div className="stats">
      <div className="name">
        <h3>
          {icon} {name}
        </h3>
        <Link to={link}>
          <FaArrowRight />
        </Link>
      </div>
      <div className="res">
        <h3>
          <span>{total}</span>
        </h3>
        <h5>{name}</h5>
      </div>
    </div>
  );
}

export default DashStats;
