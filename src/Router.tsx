import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Task from "./pages/Task";

type RouteWithId<T = {}> = {
  id: number;
} & Route<T>;

type Route<T = {}> = {
  name: string;
} & T;

export type RootStackParamList = {
  Home: Route;
  Project: RouteWithId;
  Task: RouteWithId;
};

export type RouteStackProps = NativeStackScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>;

const Router: FC = () => {
  const { Navigator, Screen } =
    createNativeStackNavigator<RootStackParamList>();

  const createRoute =
    (extra = {}) =>
    ({ route }: RouteStackProps) => ({ title: route.params.name, ...extra });

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
