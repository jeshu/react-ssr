import React from "react";
import { Switch, Route } from "react-router-dom";

function RenderRoutes({routes}) {
  return (
      <Switch>
        {routes.map((route, index) => {
          return <Route
            key={index}
            {...route}
          />;
        })}
      </Switch>
  );
}

export default RenderRoutes;
