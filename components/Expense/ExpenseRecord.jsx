import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { List } from "react-native-paper";

const ExpenseRecord = () => {
  const fruits = ["apple", "orange", "cherry"];

  return (
    <ScrollView>
      <View style={styles.container}>
        {fruits.map((item) => {
          return (
            <List.Section>
              <List.Subheader>{item}</List.Subheader>
              <List.Item
                title="First Item"
                description="Item description"
                left={(props) => <List.Icon {...props} icon="folder" />}
              />
              <List.Item
                title="First Item"
                description="Item description"
                left={(props) => <List.Icon {...props} icon="folder" />}
              />
              <List.Item
                title="First Item"
                description="Item description"
                left={(props) => <List.Icon {...props} icon="folder" />}
              />
            </List.Section>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ExpenseRecord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
