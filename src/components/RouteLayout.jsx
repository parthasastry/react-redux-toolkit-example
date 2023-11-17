import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

import NavBar from "./NavBar";

const RouteLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />

        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RouteLayout;
