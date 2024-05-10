import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";

import { Divider } from "react-native-paper";

import FilterExpense from '../../components/Expense/FilterExpense'
import ExpenseRecord from '../../components/Expense/ExpenseRecord'


const ExpenseScreen = () => {
  return (
        <View >
          <FilterExpense/>
          <Divider/>
          <ExpenseRecord/>
        </View>
  );
};

export default ExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
