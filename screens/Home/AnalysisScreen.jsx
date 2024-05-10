import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AnalysisScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default AnalysisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
