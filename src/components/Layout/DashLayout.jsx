// import { Outlet } from "react-router-dom";
import { DashSideNav } from "../dashboard";
import { MdClose, MdMenu } from "react-icons/md";

function DashLayout({ children }) {
  return (
    <div className="dash-layout">
      {/* <DashTopNav /> */}
      <div className="mid-layout">
        <MdMenu className="small-screen-menu" />
        <MdClose className="small-screen-menu close" />
        <DashSideNav />
        <main className="layout-children">{children}</main>
      </div>
    </div>
  );
}

export default DashLayout;
