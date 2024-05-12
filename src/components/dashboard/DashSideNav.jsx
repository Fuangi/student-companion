import { NavLink } from "react-router-dom";
import {
  FaClipboardList,
  FaFolder,
  FaHouse,
  FaList,
  FaNewspaper,
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
            Home <FaHouse className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/plans">
            Plans <FaClipboardList className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/goals">
            Goals <FaList className="dash-side-icon" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/forums">
            Forums <FaPeopleGroup className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources">
            Res <FaNewspaper className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/files">
            Files <FaFolder className="dash-side-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/trash">
            Trash <FaTrash className="dash-side-icon" />
          </NavLink>
        </li>
      </ul>
      <div className="settings">
        <NavLink to="/setting">
          Settings <MdSettings className="dash-side-icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default DashSideNav;
