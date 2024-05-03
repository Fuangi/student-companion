import { NavLink } from "react-router-dom";
import {
  FaClipboardList,
  FaFolder,
  FaHouse,
  FaList,
  FaPeopleGroup,
  FaTrash,
} from "react-icons/fa6";
import { MdSettings } from "react-icons/md";

function DashSideNav() {
  return (
    <div className="dashboard-side-nav">
      <ul className="dash-side">
        <li>
          <NavLink to="/" end>
            <FaHouse className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/planner">
            <FaClipboardList className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/goals">
            <FaList className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/forums">
            <FaPeopleGroup className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/files">
            <FaFolder className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/trash">
            <FaTrash className="dash-side-icon" />
          </NavLink>
        </li>
      </ul>
      <div className="settings">
        <NavLink to="/setting">
          <MdSettings className="dash-side-icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default DashSideNav;
