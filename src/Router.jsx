import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Task from "./pages/Task";

const Router = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  const createRoute =
    (extra = {}) =>
    ({ route }) => ({ title: route.params.name, ...extra });

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Project" component={Project} options={createRoute()} />
        <Screen name="Task" component={Task} options={createRoute()} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
