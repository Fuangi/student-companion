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
import { MdClose, MdMenu, MdSettings } from "react-icons/md";
import { useState } from "react";

function DashSideNav() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <div
        className="dashboard-side-nav"
        style={{
          width: `${window.innerWidth <= 700 && showMenu ? "50%" : ""}`,
        }}
      >
        {showMenu ? (
          <MdClose
            className="side-menu"
            onClick={() => {
              setShowMenu(false);
            }}
            style={{ color: "white" }}
          />
        ) : (
          <MdMenu className="side-menu" onClick={() => setShowMenu(true)} />
        )}
        <>
          <ul className="dash-side">
            <li>
              <NavLink to="/dashboard" end>
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
          <div className="settings" style={{ marginBottom: "2rem" }}>
            <NavLink to="/setting">
              Settings <MdSettings className="dash-side-icon" />
            </NavLink>
          </div>
        </>
      </div>
    </>
  );
}

export default DashSideNav;
