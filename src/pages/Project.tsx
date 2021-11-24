import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../Router";

type Props = NativeStackScreenProps<RootStackParamList, "Project">;

const Project: FC<Props> = ({ route, navigation }) => {
  const { id, name } = route.params;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button
        title="Go to task"
        onPress={() =>
          navigation.navigate("Task", { id: 1, name: "Nom de la tâche" })
        }
      />
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

export default Project;
