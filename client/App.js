import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Homescreen from "./screens/Homescreen";
import RandomQuote from "./screens/RandomQuote";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{
            title: "Breaking Bad Quotes",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#093009",
            },
          }}
        />
        <Stack.Screen
          name="Quotes"
          component={RandomQuote}
          options={{
            title: "Test",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#093009",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
