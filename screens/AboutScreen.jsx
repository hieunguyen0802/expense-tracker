import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


const AboutScreen = ({navigator}) => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Button textColor='pink' mode='text' onPress={() => navigator.navigate("Home")}>
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