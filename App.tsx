import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailsScreen } from "./src/screens/details-screen";
import { PaymentScreen } from "./src/screens/payment-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ animation: "slide_from_bottom" }} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ animation: "slide_from_bottom"}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
