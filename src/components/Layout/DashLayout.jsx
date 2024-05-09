// import { Outlet } from "react-router-dom";
import { DashSideNav } from "../dashboard";

function DashLayout({ children }) {
  return (
    <div className="dash-layout">
      {/* <DashTopNav /> */}
      <div className="mid-layout">
        <DashSideNav />

        <main className="layout-children">{children}</main>
      </div>
    </div>
  );
}

export default DashLayout;
