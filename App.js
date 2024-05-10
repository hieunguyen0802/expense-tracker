import { Button, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import IndexScreen from "./screens/Home/IndexScreen";
import WelcomeScreen from "./screens/Welcome/WelcomeScreen";
 

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          <StatusBar />
          <Stack.Navigator screenOptions={
            {
              headerShown: false
            }
          }>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={IndexScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}
