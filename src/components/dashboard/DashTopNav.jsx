import { FaUser } from "react-icons/fa6";
import { MdLogout, MdNotifications } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import { logo } from "../../assets";

function DashTopNav() {
  function handleNotification() {
    alert("Notification");
  }
  return (
    <div className="user-profile">
      <div className="user-actions">
        <button onClick={handleNotification}>
          <NavLink to="/notifications">
            <MdNotifications />
          </NavLink>
        </button>

        <NavLink to="/me">
          <FaUser />
        </NavLink>

        <button>
          <NavLink to="#">
            <MdLogout />
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default DashTopNav;
