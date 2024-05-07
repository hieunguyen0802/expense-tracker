import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Checkbox } from 'react-native-paper';
import { useState } from 'react';

export default function App() {

  const [checked, setChecked] = useState(false)

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start on your app!</Text>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color='red'
              />
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              Press me
            </Button>
           
          <StatusBar style="auto" />
        </View>
        </SafeAreaProvider>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
