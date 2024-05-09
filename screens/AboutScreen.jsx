import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { List } from 'react-native-paper';
import { useLayoutEffect } from 'react';

const AboutScreen = ({navigation, route}) => {

  const {name} = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name
    })
  }, [navigation, route]);
  const data = [
    {
      id: 1,
      title: "test",
      info: "ly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 2,
      title: "hihi",
      info: "ly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 3,
      title: "logi",
      info: "ly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      id: 4,
      title: "dell",
      info: "ly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

  ]

  

  return (
    <View style={styles.container}>
      <Text>About {name}</Text>
      <Button textColor='pink' mode='contained' onPress={() => navigation.navigate("Home")}>
        Go to Home
      </Button>
      {data.map((item) => {
        return (
          <List.Item
            key = {item.id}
            title={item.title}
            description= {item.info}
            left={props => <List.Icon {...props} icon="folder" />}
            right={props => <List.Icon {...props} icon="account-arrow-up" />}
            onPress={()=> {
              console.log(item.id)
              navigation.navigate("Detail", {data: item})
            }}
            />
        )
      })}
     
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