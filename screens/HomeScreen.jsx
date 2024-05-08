import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='click me' textColor='pink' mode='text' onPress={() => navigation.navigate("About")}>
        Go to About
      </Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});