import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./screens/Homescreen";
import RandomQuote from "./screens/RandomQuote";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{
            title: "Breaking Bad Quotes",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#093009",
            },
          }}component={Homescreen} />
        <Stack.Screen name="Quotes" component={RandomQuote} />
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
