import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import {useState} from "react";

export default function App() {
    const [database, setDatabase] = useState([])
    axios.get('http://localhost:1337/projects').then((res) => {
        setDatabase(res.data)
    })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your apps!</Text>
      <StatusBar style="auto" />
        <Core data={database} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
