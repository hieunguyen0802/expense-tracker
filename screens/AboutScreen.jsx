import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Button title='click for fun' textColor='pink' mode='text' onPress={() => navigation.navigate("Home")}>
        Go to Home
      </Button>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});