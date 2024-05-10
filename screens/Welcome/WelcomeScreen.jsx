import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";


const WelcomeScreen = ({ navigation }) => {

  return (
        <View style={styles.container}>
          <Text variant="headlineMedium">Welcome</Text>
          <Text variant="headlineSmall">Personal Expense Tracker</Text>
          <Button
            contentStyle={styles.buttonStyles}
            labelStyle={styles.buttonLabelText}
            textColor="white"
            buttonColor="#ADD8E6"
            mode="contained"
            onPress={() => navigation.navigate("Home")}
            icon="arrow-right"
          >
            Get Started
          </Button>
        </View>
    
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4682fc",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabelText: {
    fontWeight: "900",
    fontSize: 16,
  },
  buttonStyles: {
    flexDirection: "row-reverse",
  },
});
