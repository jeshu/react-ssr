import React from "react";
import Header from "./components/Header";
import { fetchCurrentUsers } from "./actions";
import RenderRoutes from "../helpers/renderRoutes";

const App = ({ routes }) => {
  return (
    <div>
      <Header />
      <RenderRoutes routes={routes} />
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUsers()),
};
