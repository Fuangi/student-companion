import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ResHeader({ sortVals, url }) {
  return (
    <div className="res-actions">
      <input type="search" placeholder="Search..." id="search" />
      <select name="sort" id="">
        <option value="">Sort by</option>
        {sortVals?.map((val, i) => (
          <option value={val} key={i}>
            {val}
          </option>
        ))}
      </select>
      <Link to={url}>
        <FaPlus /> New
      </Link>
    </div>
  );
}

export default ResHeader;
