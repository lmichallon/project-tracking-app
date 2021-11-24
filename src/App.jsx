import React from "react";
import { registerRootComponent } from "expo";

import Router from "./Router";

const App = () => {
  return <Router />;
};

registerRootComponent(App);
export default App;
