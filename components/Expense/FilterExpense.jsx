import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";

const FilterExpense = () => {
  return (
    <View>
      <Card>
        <Card.Content>
          <View style={styles.container}>
            <Text>previous month</Text>
            <Text>this month</Text>
            <Text>next month</Text>
          </View>
          <View style={styles.container}>
            <Text>expense</Text>
            <Text>income</Text>
            <Text>Total</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default FilterExpense;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // if you want to fill rows left to right
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
});
