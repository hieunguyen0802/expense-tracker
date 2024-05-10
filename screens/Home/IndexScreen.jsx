import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExpenseScreen from "./ExpenseScreen";
import Analysis from "./AnalysisScreen";
import { Icon } from "react-native-paper";

const IndexScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {color: "violet"},
        tabBarActiveTintColor: "red",
        tabBarLabelStyle: {
          fontSize: 15,
          margin: 0,
          padding: 0,
        },
      }}
    >
      <Tab.Screen
        name="Expense"
        component={ExpenseScreen}
        options={{
          tabBarIcon: () => <Icon size={30} source="cash" color="green" />,
          headerTitle: "My Expense"
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={Analysis}
        options={{
          tabBarIcon: () => <Icon size={30} source="chart-bar" color="blue" />,
          headerTitle: "My Summary"
        }}
      />
    </Tab.Navigator>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {

  }
});
