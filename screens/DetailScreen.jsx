import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailScreen = ({ route }) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
      <Text>{data.id}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
