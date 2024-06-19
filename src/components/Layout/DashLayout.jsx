// import { Outlet } from "react-router-dom";
import { DashSideNav, DashTopNav } from "../dashboard";

function DashLayout({ children }) {
  return (
    <div className="dash-layout">
      <div className="mid-layout">
        <DashSideNav />
        <div className="bottom-layout">
          <DashTopNav />
          <main className="layout-children">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default DashLayout;
