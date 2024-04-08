import React from "react";

import AuthRoute from "./auth-route";
import PlanRoute from "./planner.routes";
import ForumRoute from "./forums.routes";
import ResourceRoute from "./resources.routes";

function MyRoutes() {
  return (
    <React.Fragment>
      <AuthRoute />
      <PlanRoute />
      <ForumRoute />
      <ResourceRoute />
    </React.Fragment>
  );
}

export default MyRoutes;
