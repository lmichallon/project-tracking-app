import React, { FC } from "react";
import { registerRootComponent } from "expo";

import Router from "./Router";

const App: FC = () => {
  return <Router />;
};

registerRootComponent(App);
export default App;
