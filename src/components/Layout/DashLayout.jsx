// import { Outlet } from "react-router-dom";
import { DashSideNav, DashTopNav } from "../dashboard";

function DashLayout({ children }) {
  return (
    <div className="dash-layout">
      <DashTopNav />
      <div className="mid-layout">
        <DashSideNav />

        <div className="layout-children">
          {/* <Outlet /> */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashLayout;
