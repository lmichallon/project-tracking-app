import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../Router";

type Props = NativeStackScreenProps<RootStackParamList, "Task">;

const Task: FC<Props> = ({ route }) => {
  const { id, name } = route.params;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
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

export default Task;
