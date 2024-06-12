import { FaUser } from "react-icons/fa6";
import { MdLogout, MdNotifications } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import { logo } from "../../assets";

function DashTopNav() {
  return (
    <div className="user-profile">
      <div className="user-actions">
        <NavLink to="/notifications">
          <MdNotifications />
        </NavLink>
        <NavLink to="/me">
          <FaUser />
        </NavLink>
        <NavLink to="#">
          <MdLogout />
        </NavLink>
      </div>
    </div>
  );
}

export default DashTopNav;
