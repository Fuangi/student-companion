import { FaUser } from "react-icons/fa6";
import { MdLogin, MdNotifications } from "react-icons/md";
import { NavLink } from "react-router-dom";

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
          <MdLogin />
        </NavLink>
      </div>
    </div>
  );
}

export default DashTopNav;
