import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: projects } = useFetch("/projects");

  return (
    <>
      <View style={styles.projects}>
        <Text style={styles.title}>Mes projets en cours :</Text>

        {projects.map(({ name, description, id }) => (
          <View key={id} style={styles.card}>
            <Link
              style={styles.title}
              to={{ screen: "Project", params: { id, name } }}
            >
              {name}
            </Link>
            <Text>{description}</Text>
          </View>
        ))}
      </View>
      <View style={styles.projects}>
        <Text style={styles.title}>Mes projets terminés :</Text>

        {projects.map(({ name, description, id }) => (
          <View key={id} style={styles.card}>
            <Link
              style={styles.title}
              to={{ screen: "Project", params: { id, name } }}
            >
              {name}
            </Link>
            <Text>{description}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  projects: {
    display: "flex",
    padding: 20,
  },
  card: {
    width: "95%",
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Home;
