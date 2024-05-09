import { Button, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import DetailScreen from "./screens/DetailScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          <StatusBar />
          <Stack.Navigator screenOptions={{
                headerStyle: {
                  backgroundColor: "pink",
                },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "bold" },
                headerRight: () => (
                  <Button textColor='white' mode='text' labelStyle={{fontSize:20}} icon="menu" onPress={()=> {alert("you clicked menu")}}> Menu </Button>
                ),
                headerLeft: () => (
                  <Button textColor='white' mode='text' labelStyle={{fontSize:20}} icon="arrow-left" onPress={()=> console.log("haha")} > Back </Button>
                )}}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen name="About" component={AboutScreen} />
             
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}
