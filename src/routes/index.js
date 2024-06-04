import React from "react";

import PlanRoute from "./planner.routes";
import ForumRoute from "./forums.routes";
import ResourceRoute from "./resources.routes";
import DashRoute from "./dashboard.routes";
import GoalsRoute from "./goals.routes";

function MyRoutes() {
  return (
    <React.Fragment>
      <DashRoute />
      <PlanRoute />
      <ForumRoute />
      <ResourceRoute />
      <GoalsRoute />
    </React.Fragment>
  );
}

export default MyRoutes;
