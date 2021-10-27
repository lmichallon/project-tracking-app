import React from 'react';
import axios from "axios";
import {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Project from './screens/Project';
import Task from './screens/Task';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
      const [database, setDatabase] = useState([])

        axios.get('http://localhost:1337/projects').then((res) => {
        setDatabase(res.data)
      })
        return (
        <NavigationContainer>
          <Navigator>
            <Screen name="Home" component={Home} />
            <Screen name="Project" component={Project} options={({ route }) => ({ title: route.params.name })} />
            <Screen name="Task" component={Task} options={({ route }) => ({ title: route.params.name })} />
          </Navigator>
        </NavigationContainer>
        );
}

export default App;