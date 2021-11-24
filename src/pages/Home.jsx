import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  const navigateToProject = () =>
    navigation.navigate("Project", { id: 1, name: "Mon premier projet" });

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title="Go to project" onPress={navigateToProject} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
